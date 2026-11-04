"use client";
import { useState, type FormEvent } from "react";
import { validateSubmission } from "@/lib/validation";
export function useSubmission(endpoint: string) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setBusy(true);
    setStatus("");
    setError(false);
    try {
      if (process.env.NEXT_PUBLIC_STATIC_DEMO === "true") {
        const kind = endpoint.endsWith("reservation")
          ? "reservation"
          : "contact";
        const valid = validateSubmission(kind, data);
        const key = `raum-demo-${kind}-v1`;
        let previous: unknown;
        try {
          previous = JSON.parse(localStorage.getItem(key) || "[]");
        } catch {
          previous = [];
        }
        const records = Array.isArray(previous) ? previous.slice(-49) : [];
        records.push({
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          ...valid,
        });
        try {
          localStorage.setItem(key, JSON.stringify(records));
        } catch {
          throw new Error(
            "Your browser couldn’t save this demo request. Please enable browser storage and try again.",
          );
        }
        setStatus(
          kind === "contact"
            ? "Your demo message has been saved. No email has been sent."
            : "Your demo reservation request has been saved. No table has been booked.",
        );
        form.reset();
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(result.message || "Please try again.");
      setStatus(result.message);
      form.reset();
    } catch (err) {
      setError(true);
      setStatus(
        err instanceof Error
          ? err.message
          : "We couldn’t send your request. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return { submit, busy, status, error };
}
