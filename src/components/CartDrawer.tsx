"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/menu";
import Modal from "./Modal";
import Link from "next/link";
export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  const [saved, setSaved] = useState(false);
  const vat = Math.round(subtotal * 0.08);
  function saveList() {
    const text = [
      "RAUM — YOUR CAFÉ LIST",
      "",
      ...items.map(
        (item) =>
          `${item.quantity} × ${item.name} — ${formatPrice(item.price_numerical * item.quantity)}`,
      ),
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      `VAT (8%): ${formatPrice(vat)}`,
      `Total: ${formatPrice(subtotal + vat)}`,
      "",
      "Demo menu. This list is not an order or a payment.",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "raum-cafe-list.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  }
  return (
    <Modal open={isOpen} onClose={onClose} titleId="list-title">
      <div className="drawer-header">
        <div>
          <p className="eyebrow">For your next visit</p>
          <h2 id="list-title">Your café list</h2>
        </div>
        <button
          className="icon-button"
          aria-label="Close café list"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      {items.length ? (
        <>
          <div className="drawer-items">
            {items.map((item) => (
              <article className="list-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price_numerical)}</p>
                  <div className="quantity-control">
                    <button
                      aria-label={`Remove one ${item.name}`}
                      onClick={() => {
                        updateQuantity(item.id, -1);
                        setSaved(false);
                      }}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Add one ${item.name}`}
                      disabled={item.quantity >= 20}
                      onClick={() => {
                        updateQuantity(item.id, 1);
                        setSaved(false);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="remove-item"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <strong>
                  {formatPrice(item.price_numerical * item.quantity)}
                </strong>
              </article>
            ))}
          </div>
          <div className="drawer-total">
            <p>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </p>
            <p>
              <span>VAT (8%)</span>
              <span>{formatPrice(vat)}</span>
            </p>
            <p className="total">
              <span>Total</span>
              <span>{formatPrice(subtotal + vat)}</span>
            </p>
            <button className="button button--primary" onClick={saveList}>
              Save your list
            </button>
            <p className="fine-print">
              Plan a visit, save your favorites. This demo does not place orders
              or take payments.
            </p>
            <p role="status" className="form-status">
              {saved ? "Your list is ready to download." : ""}
            </p>
            <button
              className="text-button"
              onClick={() => {
                clearCart();
                setSaved(false);
              }}
            >
              Clear list
            </button>
          </div>
        </>
      ) : (
        <div className="empty-list">
          <h3>
            Something lovely
            <br />
            starts with a look.
          </h3>
          <p>Your favorites will appear here.</p>
          <Link
            href="/menu"
            onClick={onClose}
            className="button button--primary"
          >
            Explore the menu
          </Link>
        </div>
      )}
    </Modal>
  );
}
