"use client";

import React from "react";
import { menuData } from "@/data/menu";

const MenuPrintPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 max-w-4xl mx-auto font-serif text-stone-900 print:p-0">
      <div className="text-center border-b-2 border-primary pb-8 mb-12">
        <h1 className="text-5xl font-bold tracking-tighter mb-2">MAGNA</h1>
        <p className="text-sm uppercase tracking-[0.4em] text-stone-500 mb-4">Restaurant & Bar</p>
        <div className="flex justify-center space-x-6 text-xs font-sans uppercase tracking-widest text-stone-400">
          <span>35-25 Farrington St, Flushing</span>
          <span>•</span>
          <span>(718) 445-3352</span>
          <span>•</span>
          <span>magnarestaurant.com</span>
        </div>
      </div>

      <div className="space-y-16">
        {Object.entries(menuData).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-3xl font-bold uppercase tracking-widest border-b border-stone-100 mb-8 pb-2 text-primary italic">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start group">
                  <div className="pr-4">
                    <h3 className="text-lg font-bold flex items-center">
                      {item.name}
                      {item.popular && <span className="ml-2 text-[10px] text-secondary">★</span>}
                    </h3>
                    <p className="text-sm text-stone-500 italic mt-1">{item.description}</p>
                  </div>
                  <span className="font-bold text-stone-900">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-20 pt-8 border-t border-stone-100 text-center text-[10px] text-stone-400 font-sans uppercase tracking-[0.2em] space-y-2">
        <p>Everything is prepared fresh to order. Please inform your server of any allergies.</p>
        <p>© 2026 Magna Restaurant & Bar. All rights reserved.</p>
      </footer>

      {/* Control for screen view */}
      <div className="fixed bottom-8 right-8 print:hidden flex space-x-4">
        <button 
          onClick={() => window.print()} 
          className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-black transition-all transform hover:scale-105"
        >
          Print to PDF
        </button>
        <button 
          onClick={() => window.history.back()} 
          className="bg-stone-100 text-stone-600 px-8 py-3 rounded-full font-bold hover:bg-stone-200 transition-all"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MenuPrintPage;
