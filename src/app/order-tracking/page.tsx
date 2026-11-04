import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Your Visit" };
export default function TrackingPage() {
  return (
    <section className="page-intro container">
      <p className="eyebrow">Good things are worth a little pause</p>
      <h1>
        See you soon.
        <br />
        <em>Stay a little.</em>
      </h1>
      <p>
        This Raum concept has no live orders or delivery tracking.
        <br />
        Save a café list or try a demo table request instead.
      </p>
      <div className="hero-buttons" style={{ justifyContent: "center" }}>
        <Link href="/menu" className="button button--primary">
          Find your favorites
        </Link>
        <Link href="/contact#reserve" className="text-link">
          Request a table →
        </Link>
      </div>
    </section>
  );
}
