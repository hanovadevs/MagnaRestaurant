"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bike, Utensils, Briefcase, CreditCard, Wifi, ShieldCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Dine-In",
      description: "Experience the coziness of our wooden bar and elegant dining room.",
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Delivery & Takeout",
      description: "Quick and careful service so you can enjoy Magna at home.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Full Catering",
      description: "Bring the taste of Italy to your next office meeting or family event.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "NFC Payments",
      description: "Modern, secure payments including Apple Pay, Google Pay, and major cards.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free Guest Wi-Fi",
      description: "Stay connected while you dine or work from our bar.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safe & Accessible",
      description: "Fully wheelchair accessible with high standards of cleanliness.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-wood-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            More Than Just A Meal
          </span>
          <h2 className="text-4xl md:text-5xl font-elegant text-white mb-4">
            Services & <span className="text-secondary italic">Offerings</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-elegant tracking-wide">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </section>
  );
};

export default ServicesSection;
