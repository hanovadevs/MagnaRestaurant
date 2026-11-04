"use client";
import { getCafeDate, reservationTimes } from "@/lib/validation";
import { useSubmission } from "./useSubmission";
import Arrow from "./Arrow";
export default function ReservationForm() {
  const { submit, busy, status, error } = useSubmission("/api/reservation");
  return (
    <section id="reserve" className="section reservation">
      <div className="container reservation-grid">
        <div className="reservation-copy">
          <p className="eyebrow">We’ll make room</p>
          <h2>
            Your favorite people.
            <br />
            <em>Our favorite table.</em>
          </h2>
          <p>
            A leisurely breakfast, a coffee date, or a long catch-up. Pick a day
            and make a little time for yourself.
          </p>
          <p className="hours">Every day, 6:30 AM – 11:00 PM</p>
          <span className="script">See you soon.</span>
        </div>
        <form
          onSubmit={submit}
          className="cafe-form reservation-form"
          aria-label="Reservation request"
        >
          <div className="form-row">
            <label htmlFor="reservation-name">
              Your name
              <input
                id="reservation-name"
                name="name"
                autoComplete="name"
                placeholder="Alex Nguyen"
                required
                minLength={2}
                maxLength={80}
              />
            </label>
            <label htmlFor="reservation-email">
              Email address
              <input
                id="reservation-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@example.com"
                required
                maxLength={254}
              />
            </label>
          </div>
          <div className="form-row form-row--three">
            <label htmlFor="reservation-date">
              Date
              <input
                id="reservation-date"
                name="date"
                type="date"
                min={getCafeDate()}
                required
              />
            </label>
            <label htmlFor="reservation-time">
              Time
              <select
                id="reservation-time"
                name="time"
                defaultValue="10:00"
                required
              >
                {reservationTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="reservation-guests">
              Your party
              <select
                id="reservation-guests"
                name="guests"
                defaultValue="2"
                required
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i ? "people" : "person"}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="button button--primary"
            disabled={busy}
          >
            {busy ? "Saving your request…" : "Request a table"}
            <Arrow />
          </button>
          <p className="fine-print">
            A café concept demo. No table is booked and no email is sent.
          </p>
          <p
            role={error ? "alert" : "status"}
            className={`form-status ${error ? "form-status--error" : ""}`}
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
