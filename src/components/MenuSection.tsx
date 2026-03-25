"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";
import { Coffee, Pizza, UtensilsCrossed, Wine, IceCream, Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "./Button";

const categories = [
  { id: "breakfast", label: "Breakfast", icon: <Coffee className="w-5 h-5" /> },
  { id: "lunch", label: "Lunch", icon: <Pizza className="w-5 h-5" /> },
  { id: "dinner", label: "Dinner", icon: <UtensilsCrossed className="w-5 h-5" /> },
  { id: "drinks", label: "Drinks", icon: <Wine className="w-5 h-5" /> },
  { id: "desserts", label: "Desserts", icon: <IceCream className="w-5 h-5" /> },
];

import { useRouter } from "next/navigation";

const MenuSection = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("dinner");
  const { addItem } = useCart();

  const handleDownloadPDF = () => {
    router.push("/menu-print");
  };

  return (
    <section id="menu" className="py-24 bg-white relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            The Flavors of Italy
          </span>
          <h2 className="text-4xl md:text-5xl font-elegant text-wood-dark mb-4">
            Our Digital <span className="text-primary italic">Menu</span>
          </h2>
          <p className="max-w-xl mx-auto text-wood-dark/60">
            From sunrise to sunset, we serve authentic dishes prepared with 
            fresh ingredients and traditional techniques. Click <Plus className="inline w-3 h-3" /> to add to order.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-stone-100 text-stone-800 hover:bg-stone-200"
              }`}
            >
              {cat.icon}
              <span className="uppercase text-xs tracking-widest">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {menuData[activeCategory].map((item: any) => (
                <div 
                  key={item.id} 
                  className="bg-milky/50 p-6 rounded-3xl border border-transparent hover:border-gold/30 hover:shadow-2xl transition-all duration-300 group relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-elegant font-bold text-wood-dark group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="bg-secondary/20 text-secondary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1 fill-secondary" />
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-elegant font-bold text-primary">{item.price}</span>
                      <button 
                        onClick={() => addItem(item)}
                        className="bg-white p-2 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-wood-dark/60 text-sm italic font-sans pr-12">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" onClick={handleDownloadPDF}>
            Download Full PDF Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
