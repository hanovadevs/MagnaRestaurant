"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, ShoppingBag, MapPin } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop"
          alt="Authentic Italian Dining"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/90 via-wood-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-secondary font-sans font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Since 1995 • Authentic Italian
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-elegant text-white leading-tight mb-6">
            Authentic Italian <br />
            <span className="text-secondary italic">Comfort</span> in the Heart of Flushing
          </h1>
          
          <p className="text-lg text-white/80 font-sans mb-10 max-w-lg leading-relaxed">
            Experience the warmth of Italy at Magna. From handcrafted pasta to our fully stocked bar, 
            every detail is crafted for an unforgettable dining experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Order Online</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Reserve a Table</span>
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-white/60">
            <div className="flex flex-col">
              <span className="text-white text-xl font-elegant">6:30 AM</span>
              <span className="text-xs uppercase tracking-widest">Opening Daily</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white text-xl font-elegant">$$</span>
              <span className="text-xs uppercase tracking-widest">Price Range</span>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <a 
              href="https://maps.app.goo.gl/Aw5JaU63oiKva4wj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col group cursor-pointer"
            >
              <div className="flex items-center space-x-1">
                <span className="text-white text-xl font-elegant group-hover:text-secondary transition-colors">Directions</span>
                <MapPin className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
              <span className="text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Flushing, NY</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.5em] mb-2 transform rotate-90 origin-left mt-20">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
