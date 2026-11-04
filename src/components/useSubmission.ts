"use client";
import { useState, type FormEvent } from "react";
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
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
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
