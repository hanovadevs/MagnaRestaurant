import {
  cp,
  mkdir,
  readdir,
  rm,
  symlink,
  unlink,
  writeFile,
} from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const stage = path.resolve(root, ".local", `pages-build-${process.pid}`);
const output = path.resolve(root, "out");
if (
  !stage.startsWith(`${root}${path.sep}.local${path.sep}`) ||
  path.dirname(output) !== root
)
  throw new Error("Invalid static build paths.");
await mkdir(stage, { recursive: true });
let linked = false;
async function filesInside(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesInside(file)));
    else files.push(file);
  }
  return files;
}
async function addSegmentAliases(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(directory, entry.name);
    if (entry.name.startsWith("__next.")) {
      // The router requests dotted segment names; a static host cannot rewrite
      // those requests to the nested files emitted by the exporter.
      for (const file of await filesInside(child)) {
        const name = path.relative(child, file).split(path.sep).join(".");
        await cp(file, path.join(directory, `${entry.name}.${name}`));
      }
    } else await addSegmentAliases(child);
  }
}
try {
  for (const name of [
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "next.config.ts",
    "postcss.config.mjs",
  ])
    await cp(path.join(root, name), path.join(stage, name), {
      recursive: true,
    });
  // Pages has no server. Only this disposable copy omits API route handlers.
  const stagedApi = path.join(stage, "src", "app", "api");
  if (!stagedApi.startsWith(`${stage}${path.sep}`))
    throw new Error("Invalid API copy path.");
  await rm(stagedApi, { recursive: true, force: true });
  await symlink(
    path.join(root, "node_modules"),
    path.join(stage, "node_modules"),
    process.platform === "win32" ? "junction" : "dir",
  );
  linked = true;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/MagnaRestaurant";
  const result = spawnSync(
    process.execPath,
    [path.join(root, "node_modules", "next", "dist", "bin", "next"), "build"],
    {
      cwd: stage,
      stdio: "inherit",
      env: {
        ...process.env,
        NEXT_PUBLIC_STATIC_DEMO: "true",
        NEXT_PUBLIC_BASE_PATH: basePath,
        RAUM_BUILD_ROOT: root,
      },
    },
  );
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Pages build failed (${result.status}).`);
  await rm(output, { recursive: true, force: true });
  await cp(path.join(stage, "out"), output, { recursive: true });
  await addSegmentAliases(output);
  await writeFile(path.join(output, ".nojekyll"), "");
  console.log(
    `Static demo ready in out${basePath ? ` for ${basePath}/` : "/"}`,
  );
} finally {
  // Remove the dependency link before recursively deleting our disposable copy.
  if (linked) await unlink(path.join(stage, "node_modules"));
  await rm(stage, { recursive: true, force: true });
}
