"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "./Button";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

import { useRouter } from "next/navigation";

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const router = useRouter();
  const { items, updateQuantity, removeItem, subtotal, itemCount, clearCart } = useCart();

  const handleCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center bg-milky">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-wood-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                      {itemCount}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-elegant font-bold text-wood-dark">Your Order</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors text-wood-dark">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingBag className="w-16 h-16" />
                  <p className="font-sans text-lg">Your basket is empty</p>
                  <Button variant="ghost" onClick={onClose}>Explore Menu</Button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-start"
                  >
                    <div className="flex-1">
                      <h3 className="font-elegant font-bold text-lg text-wood-dark leading-tight">{item.name}</h3>
                      <p className="text-sm text-wood-dark/50 mb-3">{item.price}</p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-black/10 rounded-full px-2 py-1 bg-stone-50">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-primary transition-colors text-wood-dark"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm text-wood-dark">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-primary transition-colors text-wood-dark"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-silent hover:text-primary transition-colors text-wood-dark opacity-30 hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-wood-dark">${(item.price_numerical * item.quantity).toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-milky/30 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-wood-dark/60 text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-wood-dark/60 text-sm">
                    <span>Delivery Fee</span>
                    <span>$2.50</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-wood-dark pt-2 border-t border-black/5">
                    <span>Total</span>
                    <span>${(subtotal + 2.5).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full py-4 text-base flex justify-between items-center"
                  onClick={handleCheckout}
                >
                  <span>Checkout Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <p className="text-[10px] text-center text-wood-dark/40 uppercase tracking-widest leading-relaxed">
                  By checking out you agree to our terms of service.<br />
                  Delivery available in 5 miles radius of Flushing.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
