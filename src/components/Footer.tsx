import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-wood-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-elegant font-bold tracking-tighter text-secondary">
                MAGNA
              </span>
              <span className="text-xs tracking-[0.3em] font-sans -mt-1 opacity-80 uppercase text-milky">
                Restaurant & Bar
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Bringing authentic Italian flavors and warm hospitality to the 
              heart of Flushing since 1995. Your neighborhood spot for 
              every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-wood-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-wood-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-wood-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-elegant font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="#menu" className="hover:text-secondary transition-colors">Our Digital Menu</Link></li>
              <li><Link href="#about" className="hover:text-secondary transition-colors">About Our Story</Link></li>
              <li><Link href="#reserve" className="hover:text-secondary transition-colors">Make a Reservation</Link></li>
              <li><Link href="#order" className="hover:text-secondary transition-colors">Order Online</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Catering Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-elegant font-bold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-white/70 group">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/Aw5JaU63oiKva4wj6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors"
                >
                  35-25 Farrington St,<br />Flushing, NY 11354
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70 group">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+1718-445-3352" className="hover:text-secondary transition-colors">+1 718-445-3352</a>
              </li>
              <li className="flex items-center space-x-3 text-white/70 group">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@magnarestaurant.com" className="hover:text-secondary transition-colors">info@magnarestaurant.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-elegant font-bold mb-6 text-secondary">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-white/70 font-sans">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Daily</span>
                <span className="text-white font-bold">6:30 AM - 11:00 PM</span>
              </li>
              <li className="pt-2 text-xs italic opacity-60">
                Enjoy Breakfast, Lunch, and Dinner with us every single day.
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://maps.app.goo.gl/Aw5JaU63oiKva4wj6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group cursor-pointer hover:border-secondary/30 transition-all overflow-hidden relative"
              >
                <span className="text-xs uppercase tracking-widest font-bold z-10 group-hover:text-secondary transition-colors">View on Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-2 z-10 group-hover:text-secondary transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-br from-wood-dark to-black/80 opacity-60 group-hover:scale-110 transition-transform duration-500" />
                {/* Visual placeholder for the map background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=800')] mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity bg-cover bg-center" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/40 uppercase tracking-widest font-bold">
          <p>© {currentYear} Magna Restaurant. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-50" />
    </footer>
  );
};

export default Footer;
