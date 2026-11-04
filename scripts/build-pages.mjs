import { cp, mkdir, rm, symlink, unlink } from "node:fs/promises";
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
  console.log(
    `Static demo ready in out${basePath ? ` for ${basePath}/` : "/"}`,
  );
} finally {
  // Remove the dependency link before recursively deleting our disposable copy.
  if (linked) await unlink(path.join(stage, "node_modules"));
  await rm(stage, { recursive: true, force: true });
}
