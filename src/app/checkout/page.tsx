import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Your Café Visit" };
export default function CheckoutPage() {
  return (
    <section className="page-intro container">
      <p className="eyebrow">A little plan for a lovely day</p>
      <h1>
        Your favorites.
        <br />
        <em>Your next visit.</em>
      </h1>
      <p>
        Your selection is saved in Your list at the top of the page.
        <br />
        Review quantities or download it whenever you’re ready.
      </p>
      <p className="fine-print">
        This café concept does not place orders or process payments.
      </p>
      <div className="hero-buttons" style={{ justifyContent: "center" }}>
        <Link href="/menu" className="button button--primary">
          Explore the menu
        </Link>
        <Link href="/contact#reserve" className="text-link">
          Plan a visit →
        </Link>
      </div>
    </section>
  );
}
