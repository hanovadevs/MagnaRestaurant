export const getCafeDate = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
export const reservationTimes = Array.from({ length: 32 }, (_, index) => { const minutes = 390 + index * 30; return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`; });
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max + 1) : "";
export function validateSubmission(kind: "contact" | "reservation", input: unknown) {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Please complete the form.");
  const body = input as Record<string, unknown>;
  const name = text(body.name, 80); const email = text(body.email, 254);
  if (name.length < 2 || name.length > 80) throw new Error("Please enter a name between 2 and 80 characters.");
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email address.");
  if (kind === "contact") {
    const message = text(body.message, 2000); const subject = text(body.subject, 80);
    if (message.length < 10 || message.length > 2000) throw new Error("Please write a message between 10 and 2,000 characters.");
    if (subject.length > 80) throw new Error("Please choose a shorter subject.");
    return { name, email, subject, message };
  }
  const date = text(body.date, 10); const time = text(body.time, 5); const guests = Number(body.guests);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`)) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date || date < getCafeDate()) throw new Error("Please choose today or a future date.");
  if (!reservationTimes.includes(time)) throw new Error("Please choose an available seating time.");
  if (!Number.isInteger(guests) || guests < 1 || guests > 10) throw new Error("Please choose between 1 and 10 guests.");
  if (Date.parse(`${date}T${time}:00+07:00`) <= Date.now()) throw new Error("Please choose a seating time in the future.");
  return { name, email, date, time, guests };
}
