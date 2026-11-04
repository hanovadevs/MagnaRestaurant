import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    default: "Raum Café — Coffee & Good Company",
    template: "%s | Raum Café",
  },
  description:
    "A little pause in the city. Explore Raum’s house-blended coffees, comforting breakfasts, and easy lunches. A café concept website.",
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
