"use client";
import Link from "next/link";
import { useState } from "react";
import {
  coffeeExtras,
  formatPrice,
  menuCategories,
  menuData,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";
import Arrow from "./Arrow";
export default function MenuSection({ full = false }: { full?: boolean }) {
  const [category, setCategory] = useState<MenuCategory>("drinks");
  const [notice, setNotice] = useState("");
  const { addItem, items } = useCart();
  const selected = menuData[category];
  const label = menuCategories.find((entry) => entry.id === category)!.label;
  const groups = [...new Set(selected.map((item) => item.group || label))];
  function add(item: MenuItem) {
    addItem(item);
    setNotice(`${item.name} added to your café list.`);
  }
  return (
    <section
      id="menu"
      className={`section menu-section ${full ? "menu-section--full" : ""}`}
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Something for every mood</p>
            <h2>
              A good day starts
              <br />
              <em>with the menu.</em>
            </h2>
          </div>
          <div className="menu-intro">
            <p>
              House-blended coffee, easy breakfasts,
              <br />
              and all the little things worth staying for.
            </p>
            <Link href="/menu-print" className="text-link">
              Print or save the menu <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((entry) => (
            <button
              type="button"
              key={entry.id}
              id={`tab-${entry.id}`}
              role="tab"
              aria-selected={category === entry.id}
              aria-controls="menu-panel"
              onClick={() => {
                setCategory(entry.id);
                setNotice("");
              }}
              className={category === entry.id ? "active" : ""}
            >
              {entry.label}
            </button>
          ))}
        </div>
        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${category}`}
          className="menu-groups"
          key={category}
        >
          {groups.map((group) => (
            <div className="menu-group" key={group}>
              <h3>{group}</h3>
              <div className="menu-entries">
                {selected
                  .filter((item) => (item.group || label) === group)
                  .map((item) => (
                    <article className="menu-item" key={item.id}>
                      <div className="menu-item-copy">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="menu-item-action">
                        <span>{formatPrice(item.price_numerical)}</span>
                        <button
                          type="button"
                          disabled={
                            (items.find((entry) => entry.id === item.id)
                              ?.quantity || 0) >= 20
                          }
                          aria-label={`Add ${item.name} to your café list`}
                          onClick={() => add(item)}
                        >
                          +
                        </button>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {category === "drinks" ? (
          <div className="coffee-notes">
            <div>
              <h3>Make it yours.</h3>
              <p>
                Two espresso shots per coffee drink, unless mentioned otherwise.
                Specialty coffees are served iced.
              </p>
            </div>
            <div className="extras">
              {coffeeExtras.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => add(extra)}
                  disabled={
                    (items.find((entry) => entry.id === extra.id)?.quantity ||
                      0) >= 20
                  }
                  aria-label={`Add ${extra.name}`}
                >
                  <span>{extra.name}</span>
                  <strong>+{formatPrice(extra.price_numerical)}</strong>
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="menu-bottom">
          <p className="fine-print">
            All prices in VND, subject to 8% VAT. Please tell us about any
            allergies.
          </p>
          {!full ? (
            <Link href="/menu" className="text-link">
              See the full menu <Arrow />
            </Link>
          ) : (
            <span className="fine-print">
              Food prices are for this café concept demo.
            </span>
          )}
        </div>
        <p role="status" aria-live="polite" className="selection-notice">
          {notice}
        </p>
      </div>
    </section>
  );
}
