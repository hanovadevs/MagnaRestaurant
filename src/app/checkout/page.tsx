"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, CreditCard, Wallet, Truck, ShoppingBag, 
  MapPin, CheckCircle, ChevronRight, Loader2, Globe
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import Link from "next/link";

const CheckoutPage = () => {
  const router = useRouter();
  const { items, subtotal, itemCount, clearCart } = useCart();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "cash">("card");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Flushing",
    zip: "11354",
    notes: ""
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (itemCount === 0 && !isPlacingOrder) {
      // router.push("/#menu");
    }
  }, [itemCount, isPlacingOrder]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlacingOrder(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const orderId = "MAG-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Clear cart and redirect
    clearCart();
    router.push(`/order-tracking?id=${orderId}`);
  };

  const deliveryFee = deliveryType === "delivery" ? 2.50 : 0;
  const tax = subtotal * 0.08875;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-stone-50 pt-10 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/#menu" className="flex items-center text-wood-dark/60 hover:text-primary transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans font-bold uppercase tracking-widest text-xs">Back to Menu</span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-elegant font-bold text-wood-dark">Secure Checkout</h1>
            <div className="h-1 w-12 bg-primary mx-auto mt-2 rounded-full" />
          </div>
          <div className="w-24" /> {/* Spacer */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Order Form */}
          <div className="lg:col-span-2 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Choice */}
              <div className="bg-white p-6 rounded-[32px] shadow-sm border border-black/5">
                <h2 className="text-lg font-elegant font-bold mb-4 text-wood-dark flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-primary" />
                  Delivery or Pickup?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryType("delivery")}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-2 ${
                      deliveryType === "delivery" 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-stone-100 hover:border-stone-200 text-stone-400"
                    }`}
                  >
                    <Truck className="w-6 h-6" />
                    <span className="font-bold text-sm">Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType("pickup")}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-2 ${
                      deliveryType === "pickup" 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-stone-100 hover:border-stone-200 text-stone-400"
                    }`}
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span className="font-bold text-sm">Pickup</span>
                  </button>
                </div>
              </div>

              {/* Personal Details */}
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 space-y-6">
                <h2 className="text-lg font-elegant font-bold text-wood-dark mb-2">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-1">Full Name</label>
                    <input 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className="w-full bg-stone-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 text-wood-dark transition-all placeholder:text-stone-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-1">Phone Number</label>
                    <input 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(718) 000-0000" 
                      className="w-full bg-stone-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 text-wood-dark transition-all placeholder:text-stone-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-1">Email Address</label>
                  <input 
                    required 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full bg-stone-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 text-wood-dark transition-all placeholder:text-stone-300"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              {deliveryType === "delivery" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 space-y-6"
                >
                  <h2 className="text-lg font-elegant font-bold text-wood-dark flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Delivery Address
                  </h2>
                  <div className="space-y-4">
                    <div className="relative">
                      <input 
                        required 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street Address, Apt/Suite" 
                        className="w-full bg-stone-50 border-none px-5 py-4 pl-12 rounded-2xl focus:ring-2 focus:ring-primary/20 text-wood-dark transition-all placeholder:text-stone-300"
                      />
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        readOnly
                        value="Flushing, NY"
                        className="w-full bg-stone-100/50 border-none px-5 py-4 rounded-2xl transition-all text-wood-dark/50 font-medium"
                      />
                      <input 
                        readOnly
                        value="11354"
                        className="w-full bg-stone-100/50 border-none px-5 py-4 rounded-2xl transition-all text-wood-dark/50 font-medium"
                      />
                    </div>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Delivery instructions (gate code, door color, etc.)" 
                      className="w-full bg-stone-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 text-wood-dark transition-all placeholder:text-stone-300 min-h-[100px]"
                    />
                  </div>
                </motion.div>
              )}

              {/* Payment Method */}
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 space-y-6">
                <h2 className="text-lg font-elegant font-bold text-wood-dark mb-4 text-wood-dark">Payment Method</h2>
                <div className="space-y-3">
                  <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "card" ? "border-primary bg-primary/5" : "border-stone-100 hover:border-stone-200"
                  }`}>
                    <input type="radio" name="payment" className="hidden" onClick={() => setPaymentMethod("card")} />
                    <CreditCard className={`w-6 h-6 mr-4 ${paymentMethod === "card" ? "text-primary" : "text-stone-400"}`} />
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${paymentMethod === "card" ? "text-primary" : "text-wood-dark"}`}>Credit / Debit Card</p>
                      <p className="text-xs text-stone-400">Visa, Mastercard, AMEX</p>
                    </div>
                    {paymentMethod === "card" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </label>
                  
                  <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "apple" ? "border-primary bg-primary/5" : "border-stone-100 hover:border-stone-200"
                  }`}>
                    <input type="radio" name="payment" className="hidden" onClick={() => setPaymentMethod("apple")} />
                    <Wallet className={`w-6 h-6 mr-4 ${paymentMethod === "apple" ? "text-primary" : "text-stone-400"}`} />
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${paymentMethod === "apple" ? "text-primary" : "text-wood-dark"}`}>Apple Pay</p>
                      <p className="text-xs text-stone-400">One-tap secure payment</p>
                    </div>
                    {paymentMethod === "apple" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </label>

                  <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "cash" ? "border-primary bg-primary/5" : "border-stone-100 hover:border-stone-200"
                  }`}>
                    <input type="radio" name="payment" className="hidden" onClick={() => setPaymentMethod("cash")} />
                    <div className={`w-6 h-6 mr-4 flex items-center justify-center font-bold border-2 rounded-full text-xs ${
                      paymentMethod === "cash" ? "border-primary text-primary" : "border-stone-400 text-stone-400"
                    }`}>$</div>
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${paymentMethod === "cash" ? "text-primary" : "text-wood-dark"}`}>Cash on {deliveryType === "delivery" ? "Delivery" : "Pickup"}</p>
                      <p className="text-xs text-stone-400">Pay when you receive your order</p>
                    </div>
                    {paymentMethod === "cash" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Sticky Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-black/5 sticky top-24 space-y-8">
              <h2 className="text-xl font-elegant font-bold text-wood-dark border-b pb-4 border-stone-100">Order Summary</h2>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {items.length === 0 ? (
                  <p className="text-stone-400 italic text-sm text-center py-10">Your cart is empty</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm text-wood-dark">{item.quantity}x {item.name}</p>
                        <p className="text-xs text-stone-400">{item.price}</p>
                      </div>
                      <p className="font-bold text-sm text-wood-dark">${(item.price_numerical * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-100 text-sm">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span className="text-wood-dark font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Delivery Fee</span>
                  <span className="text-wood-dark font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Taxes (8.875%)</span>
                  <span className="text-wood-dark font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-wood-dark pt-4 border-t border-black/5">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                form="checkout-form"
                type="submit"
                variant="primary" 
                size="lg" 
                className="w-full py-5 text-lg shadow-2xl relative overflow-hidden"
                disabled={isPlacingOrder || itemCount === 0}
              >
                {isPlacingOrder ? (
                  <div className="flex items-center space-x-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <span>Place Order</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
              
              <div className="flex items-center justify-center space-x-2 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <CreditCard className="w-8 h-8" />
                <Wallet className="w-8 h-8" />
                <Globe className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
