"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, Clock, MapPin, Truck, Utensils, 
  Phone, ArrowLeft, Star, Coffee, MessageSquare
} from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

const steps = [
  { id: 1, label: "Order Received", icon: <CheckCircle />, color: "bg-green-500" },
  { id: 2, label: "Preparing Food", icon: <Utensils />, color: "bg-orange-500" },
  { id: 3, label: "On the Way", icon: <Truck />, color: "bg-primary" },
  { id: 4, label: "Delivered", icon: <Star />, color: "bg-secondary" },
];

const TrackingPage = () => {
  const params = useParams();
  const orderId = params.id as string;
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  // Auto-progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (currentStep < 4) {
            setCurrentStep(s => s + 1);
            return 0;
          }
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0 text-wood-dark">
          <div>
            <h1 className="text-3xl font-elegant font-bold flex items-center">
              Tracking <span className="text-primary mx-2 italic">#{orderId}</span>
            </h1>
            <p className="text-wood-dark/60 font-medium">Estimated arrival: 24 mins</p>
          </div>
          <Link href="/#menu">
            <Button variant="ghost" className="flex items-center text-sm font-bold uppercase tracking-widest group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Order More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-black/5">
              <div className="relative mb-12">
                {/* Horizontal connection line */}
                <div className="absolute top-6 left-0 w-full h-1 bg-stone-100 -z-0" />
                <motion.div 
                  className="absolute top-6 left-0 h-1 bg-primary -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep - 1) * 33.33 + (progress / 3)}%` }}
                />

                <div className="flex justify-between relative z-10">
                  {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center group">
                      <motion.div 
                        initial={false}
                        animate={{ 
                          scale: currentStep >= step.id ? 1.1 : 1,
                          backgroundColor: currentStep >= step.id ? "rgb(153 27 27)" : "rgb(245 245 244)",
                          color: currentStep >= step.id ? "white" : "rgb(120 113 108)"
                        }}
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors border-2 border-white"
                      >
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                      </motion.div>
                      <span className={`mt-4 text-[10px] uppercase tracking-widest font-bold text-center w-20 leading-tight ${
                        currentStep >= step.id ? "text-primary" : "text-stone-400"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Details */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
                    <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    {steps[currentStep-1].label}...
                  </div>
                  <h3 className="text-2xl font-elegant font-bold text-wood-dark">
                    {currentStep === 1 && "Magna Restaurant has received your order."}
                    {currentStep === 2 && "Our chefs are preparing your Italian feast."}
                    {currentStep === 3 && "Marco is on the way with your order!"}
                    {currentStep === 4 && "Buon Appetito! Your order has been delivered."}
                  </h3>
                  <p className="text-stone-500 max-w-sm mx-auto leading-relaxed">
                    {currentStep < 4 ? "Hang tight! We're working hard to get your food to you as fresh as possible." : "We hope you enjoy your meal. Please take a moment to rate your experience."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Courier Info */}
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-black/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl overflow-hidden shadow-inner grayscale group hover:grayscale-0 transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop" alt="Courier" />
                </div>
                <div>
                  <h4 className="font-bold text-wood-dark">Marco Rossi</h4>
                  <div className="flex items-center text-xs text-orange-500 font-bold">
                    <Star className="w-3 h-3 fill-orange-500 mr-1" />
                    4.9 • 2,400+ deliveries
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 bg-stone-50 text-wood-dark rounded-xl hover:bg-stone-100 transition-all shadow-sm">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-3 bg-primary text-white rounded-xl hover:bg-red-800 transition-all shadow-lg shadow-primary/20">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Delivery Map Simulation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-4 rounded-[40px] shadow-sm border border-black/5 aspect-square relative overflow-hidden group">
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-stone-100 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
              
              {/* Map Pins */}
              <div className="absolute bottom-[20%] right-[30%] z-20">
                <div className="relative">
                  <MapPin className="w-8 h-8 text-primary animate-bounce" />
                  <div className="absolute top-1 left-1.5 w-5 h-5 bg-white rounded-full -z-10 shadow-xl" />
                </div>
                <div className="bg-white px-3 py-1 rounded-full shadow-lg border border-black/5 text-[10px] font-bold uppercase tracking-tighter mt-1">Home</div>
              </div>

              <div className="absolute top-[25%] left-[20%] z-20">
                <div className="relative">
                  <Coffee className="w-8 h-8 text-secondary animate-pulse" />
                  <div className="absolute top-1 left-1.5 w-5 h-5 bg-white rounded-full -z-10 shadow-xl" />
                </div>
                <div className="bg-white px-3 py-1 rounded-full shadow-lg border border-black/5 text-[10px] font-bold uppercase tracking-tighter mt-1">Magna</div>
              </div>

              {/* Animated Route Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-lg" viewBox="0 0 400 400">
                <motion.path
                  d="M 100 120 Q 200 150 250 200 T 300 320"
                  fill="none"
                  stroke="rgba(153, 27, 27, 0.4)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="10, 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </svg>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-wood-dark opacity-60 mb-2">
                    <span>Vespa Delivery</span>
                    <span>Live Map</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-xs font-bold text-wood-dark">Tracking enabled via GPS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-wood-dark p-8 rounded-[40px] shadow-2xl space-y-4">
              <h4 className="text-white font-elegant font-bold text-lg">Help & Support</h4>
              <p className="text-white/60 text-xs leading-relaxed">Is there an issue with your order? Our support team is available 24/7 to assist you.</p>
              <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock Loader component since I'm implementing everything in one go
const Loader2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

export default TrackingPage;
