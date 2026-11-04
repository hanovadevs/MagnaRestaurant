"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import Modal from "./Modal";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our story" },
  { href: "/menu", label: "The menu" },
  { href: "/contact", label: "Visit us" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const { itemCount } = useCart();
  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="Raum café home">
            Raum<span>COFFEE & GOOD COMPANY</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="list-button"
              onClick={() => setListOpen(true)}
              aria-label={`Open café list, ${itemCount} items`}
            >
              Your list <span>({itemCount})</span>
            </button>
            <Link
              className="button button--primary nav-book"
              href="/contact#reserve"
            >
              Book a table
            </Link>
            <button
              className="mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              Menu <span aria-hidden="true">☰</span>
            </button>
          </div>
        </div>
      </header>
      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        titleId="mobile-menu-title"
      >
        <div className="drawer-header">
          <h2 id="mobile-menu-title" className="brand">
            Raum
          </h2>
          <button
            className="icon-button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#reserve"
            onClick={() => setMenuOpen(false)}
            className="button button--primary"
          >
            Book a table
          </Link>
        </nav>
        <p className="mobile-nav-note">
          Take your time. You’re in good company.
        </p>
      </Modal>
      <CartDrawer isOpen={listOpen} onClose={() => setListOpen(false)} />
    </>
  );
}
