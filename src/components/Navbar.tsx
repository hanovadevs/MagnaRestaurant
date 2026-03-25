"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ShoppingBag, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Location", href: "#footer" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "glass py-2 shadow-md text-wood-dark" : "bg-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col">
                <span className="text-2xl font-elegant font-bold tracking-tighter leading-tight">
                  MAGNA
                </span>
                <span className="text-[10px] tracking-[0.3em] font-sans -mt-1 opacity-80 uppercase">
                  Restaurant & Bar
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-secondary transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-black/5 rounded-full transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-secondary text-wood-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {itemCount}
                  </span>
                )}
              </button>
              <a
                href="tel:+1718-445-3352"
                className="flex items-center space-x-2 text-sm font-semibold hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">(718) 445-3352</span>
              </a>
              <Link
                href="#reserve"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-red-800 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
              >
                <ShoppingBag className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-secondary text-wood-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-gold/10 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/10 hover:text-secondary transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 space-y-3 px-3 border-t border-black/5">
                  <a
                    href="tel:+1718-445-3352"
                    className="flex items-center space-x-3 text-base font-semibold"
                  >
                    <Phone className="w-5 h-5 text-secondary" />
                    <span>(718) 445-3352</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="w-full bg-primary text-white px-4 py-3 rounded-xl text-center font-bold shadow-lg flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>View Cart ({itemCount})</span>
                  </button>
                  <Link
                    href="#reserve"
                    onClick={() => setIsOpen(false)}
                    className="w-full border-2 border-primary text-primary px-4 py-3 rounded-xl text-center font-bold flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Reserve Table</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
