import "server-only";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { validateSubmission } from "./validation";

export async function handleSubmission(request: Request, kind: "contact" | "reservation") {
  let data;
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ success: false, message: "Please submit the form as JSON." }, { status: 415 });
    if (Number(request.headers.get("content-length")) > 8192) return Response.json({ success: false, message: "This message is too long." }, { status: 413 });
    const origin = request.headers.get("origin");
    if (origin && origin !== new URL(request.url).origin) return Response.json({ success: false, message: "Please submit this form from the café website." }, { status: 403 });
    const raw = await request.text();
    if (raw.length > 8192) return Response.json({ success: false, message: "This message is too long." }, { status: 413 });
    let body: unknown;
    try { body = JSON.parse(raw); } catch { return Response.json({ success: false, message: "Please check the form and try again." }, { status: 400 }); }
    data = validateSubmission(kind, body);
  } catch (error) {
    return Response.json({ success: false, message: error instanceof Error ? error.message : "Please check your details." }, { status: 400 });
  }
  try {
    const id = randomUUID();
    const directory = path.join(process.cwd(), ".local", "submissions");
    await mkdir(directory, { recursive: true });
    await appendFile(path.join(directory, `${kind}.jsonl`), `${JSON.stringify({ id, kind, createdAt: new Date().toISOString(), ...data })}\n`, { encoding: "utf8", mode: 0o600 });
    return Response.json({ success: true, id, message: kind === "contact" ? "Your demo message has been saved. No email has been sent." : "Your demo reservation request has been saved. No table has been booked." }, { status: 201 });
  } catch {
    return Response.json({ success: false, message: "We couldn’t save your request. Please try again in a moment." }, { status: 503 });
  }
}
