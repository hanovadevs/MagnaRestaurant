"use client";
import Link from "next/link";
import {
  coffeeExtras,
  formatPrice,
  menuCategories,
  menuData,
} from "@/data/menu";
export default function MenuPrintPage() {
  return (
    <div className="print-menu container">
      <div className="print-controls">
        <Link href="/menu" className="text-link">
          ← Back to the menu
        </Link>
        <button
          className="button button--primary"
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
      </div>
      <header className="print-heading">
        <span className="brand">Raum</span>
        <h1>Coffee & good company.</h1>
        <p>Our café menu. All prices in VND, subject to 8% VAT.</p>
      </header>
      {menuCategories.map((category) => (
        <section key={category.id} className="print-category">
          <h2>{category.label}</h2>
          <div className="print-entries">
            {menuData[category.id].map((item) => (
              <article key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.group ? `${item.group} · ` : ""}
                    {item.description}
                  </p>
                </div>
                <strong>{formatPrice(item.price_numerical)}</strong>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="print-category">
        <h2>Make it yours</h2>
        {coffeeExtras.map((extra) => (
          <p key={extra.id}>
            {extra.name}: +{formatPrice(extra.price_numerical)}
          </p>
        ))}
        <p>
          Two espresso shots per coffee drink, unless mentioned otherwise.
          Specialty coffees are iced only.
        </p>
      </section>
      <p className="fine-print">
        Raum café concept. Drink prices transcribed from the supplied reference;
        food prices are demo values. Please tell us about any allergies.
      </p>
    </div>
  );
}
