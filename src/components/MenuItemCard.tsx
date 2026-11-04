"use client";
import { useState } from "react";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import { getMenuOverview } from "@/data/menu-details";
import CafeImage from "./CafeImage";

export default function MenuItemCard({
  item,
  onAdd,
  atLimit,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  atLimit: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const details = getMenuOverview(item);
  function toggle() {
    const next = !pinned;
    setPinned(next);
    setOpen(next);
  }
  return (
    <article
      className={`dish-card ${open ? "dish-card--open" : ""}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !pinned) setOpen(false);
      }}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setOpen(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && !pinned)
          setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          setPinned(false);
        }
      }}
    >
      <div className="dish-card-row">
        <button
          className="dish-preview"
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={`dish-details-${item.id}`}
          aria-label={`${item.name}, view details`}
        >
          <CafeImage
            src={`/images/${details.image}.jpg`}
            alt=""
            className="dish-thumbnail"
            sizes="80px"
          />
          <span className="dish-summary">
            <span className="dish-name">{item.name}</span>
            <span className="dish-description">{item.description}</span>
            <span className="dish-detail-label">
              {open ? "A little more about it" : "Take a closer look"}
            </span>
          </span>
        </button>
        <div className="dish-action">
          <span>{formatPrice(item.price_numerical)}</span>
          <button
            className="dish-add"
            type="button"
            disabled={atLimit}
            aria-label={`Add ${item.name} to your café list`}
            onClick={() => onAdd(item)}
          >
            +
          </button>
        </div>
      </div>
      {open ? (
        <div id={`dish-details-${item.id}`} className="dish-overview">
          <CafeImage
            src={`/images/${details.image}.jpg`}
            alt={`Café photography inspired by ${item.name}`}
            className="dish-detail-photo"
            sizes="130px"
          />
          <div>
            <h4>{item.name}</h4>
            <p>{details.story}</p>
            <dl>
              <div>
                <dt>Made with</dt>
                <dd>{details.ingredients}</dd>
              </div>
              <div>
                <dt>Your way</dt>
                <dd>{details.serving}</dd>
              </div>
            </dl>
            <p className="dish-allergy">
              Demo recipe. Please ask about ingredients and allergens.
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
