"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { allMenuItems, type MenuItem } from "@/data/menu";
type CartItem = MenuItem & { quantity: number };
type CartContextType = { items: CartItem[]; addItem: (item: MenuItem) => void; removeItem: (id: number) => void; updateQuantity: (id: number, delta: number) => void; clearCart: () => void; subtotal: number; itemCount: number };
const CartContext = createContext<CartContextType | undefined>(undefined);
const storageKey = "raum-cafe-list-v1";
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(stored)) {
        const restored: CartItem[] = [];
        for (const entry of stored.slice(0, 80)) {
          if (!entry || typeof entry !== "object") continue;
          const item = allMenuItems.find((candidate) => candidate.id === entry.id);
          if (item && Number.isInteger(entry.quantity) && entry.quantity > 0 && !restored.some((candidate) => candidate.id === item.id)) restored.push({ ...item, quantity: Math.min(entry.quantity, 20) });
        }
        setItems(restored);
      }
    } catch { /* Browser storage is optional. */ }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) { try { localStorage.setItem(storageKey, JSON.stringify(items.map(({ id, quantity }) => ({ id, quantity })))); } catch { /* Keep the list usable in memory. */ } }
  }, [items, loaded]);
  const addItem = (item: MenuItem) => setItems((previous) => previous.some((i) => i.id === item.id) ? previous.map((i) => i.id === item.id ? { ...i, quantity: Math.min(20, i.quantity + 1) } : i) : [...previous, { ...item, quantity: 1 }]);
  const removeItem = (id: number) => setItems((previous) => previous.filter((item) => item.id !== id));
  const updateQuantity = (id: number, delta: number) => setItems((previous) => previous.map((item) => item.id === id ? { ...item, quantity: Math.min(20, item.quantity + delta) } : item).filter((item) => item.quantity > 0));
  const subtotal = items.reduce((sum, item) => sum + item.price_numerical * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart: () => setItems([]), subtotal, itemCount }}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used within CartProvider"); return context; }
