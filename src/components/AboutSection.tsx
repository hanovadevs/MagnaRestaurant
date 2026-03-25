"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Utensils, GlassWater, Baby, Accessibility, Wifi } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Breakfast & Coffee",
      description: "Starting your day at 6:30 AM with authentic Italian roasts and morning favorites.",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Lunch & Dinner",
      description: "From quick artisanal lunches to elegant family dinners with handcrafted pasta.",
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: "Fully Stocked Bar",
      description: "A curated selection of Italian wines, craft beers, and signature cocktails.",
    },
  ];

  const amenities = [
    { icon: <Baby className="w-5 h-5" />, text: "Family Friendly" },
    { icon: <Accessibility className="w-5 h-5" />, text: "Wheelchair Accessible" },
    { icon: <Wifi className="w-5 h-5" />, text: "Free Wi-Fi" },
  ];

  return (
    <section id="about" className="py-24 bg-milky overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Our Story & Vibe
            </span>
            <h2 className="text-4xl md:text-5xl font-elegant text-wood-dark mb-6 leading-tight">
              Casual Elegance, <br />
              <span className="text-primary italic">Timeless</span> Flavor.
            </h2>
            <p className="text-wood-dark/70 text-lg leading-relaxed mb-8 font-sans">
              Magna Restaurant & Bar is more than just a place to eat; it&apos;s a heartbeat in Flushing. 
              Whether you&apos;re enjoying a quiet morning espresso at our hand-polished wooden bar or 
              celebrating a milestone with a grand family dinner, we welcome you with open arms 
              and authentic Italian warmth.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-wood-dark">{feature.title}</h3>
                    <p className="text-wood-dark/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-wood-dark/10">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2 text-wood-dark/60 font-semibold text-sm">
                  <div className="text-secondary">{amenity.icon}</div>
                  <span>{amenity.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-stone-200">
                  <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop"
                    alt="Bar Cocktails"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 bg-stone-200">
                  <Image
                    src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?q=80&w=1000&auto=format&fit=crop"
                    alt="Dining Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 bg-stone-200">
                  <Image
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000&auto=format&fit=crop"
                    alt="Morning Coffee"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-stone-200">
                  <Image
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
                    alt="Authentic Pasta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
