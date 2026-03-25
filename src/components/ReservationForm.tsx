"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, Send } from "lucide-react";
import Button from "./Button";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your reservation request! We will contact you shortly to confirm.");
  };

  return (
    <section id="reserve" className="py-24 bg-milky relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Experience Magna
            </span>
            <h2 className="text-4xl md:text-5xl font-elegant text-wood-dark mb-6 leading-tight">
              Reserve Your <span className="text-primary italic">Table</span>
            </h2>
            <p className="text-wood-dark/70 text-lg leading-relaxed mb-8">
              Join us for an unforgettable dining experience. Whether it&apos;s a 
              romantic dinner or a family gathering, we&apos;ll make sure your 
              visit is special.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-wood-dark/60">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold italic font-elegant text-lg">Daily from 6:30 AM to 11:00 PM</span>
              </div>
              <p className="text-sm font-sans">
                * For groups larger than 10, please call us directly at 
                <a href="tel:+1718-445-3352" className="text-primary font-bold ml-1 hover:underline">
                  (718) 445-3352
                </a>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(61,43,31,0.15)] border border-gold/10 relative overflow-hidden"
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -z-0" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-wood-dark opacity-50 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-milky/50 border-2 border-transparent focus:border-secondary/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-semibold text-wood-dark"
                    placeholder="Luigi Rossi"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-wood-dark opacity-50 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-milky/50 border-2 border-transparent focus:border-secondary/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-semibold text-wood-dark"
                    placeholder="luigi@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-wood-dark opacity-50 ml-1">
                    <Calendar className="w-3 h-3 inline mr-1" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-milky/50 border-2 border-transparent focus:border-secondary/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-semibold text-wood-dark"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-wood-dark opacity-50 ml-1">
                    <Clock className="w-3 h-3 inline mr-1" /> Time
                  </label>
                  <select
                    className="w-full bg-milky/50 border-2 border-transparent focus:border-secondary/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-semibold appearance-none text-wood-dark"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-wood-dark opacity-50 ml-1">
                    <Users className="w-3 h-3 inline mr-1" /> Guests
                  </label>
                  <select
                    className="w-full bg-milky/50 border-2 border-transparent focus:border-secondary/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-semibold appearance-none text-wood-dark"
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>8+ People</option>
                  </select>
                </div>
              </div>

              <Button variant="primary" size="lg" className="w-full py-5 text-lg shadow-xl" type="submit">
                Check Availability <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
