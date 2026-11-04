import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";
import CafeImage from "@/components/CafeImage";
export const metadata: Metadata = { title: "The Menu" };
export default function MenuPage() {
  return (
    <>
      <div className="menu-page-hero">
        <div className="container menu-page-hero-grid">
          <div>
            <p className="eyebrow">Made with care. Enjoyed your way.</p>
            <h1>
              Find your
              <br />
              <em>kind of lovely.</em>
            </h1>
            <p>
              From the first coffee to the last sweet bite.
              <br />
              Take a look. Take your time.
            </p>
          </div>
          <CafeImage
            src="/images/raum-coffee.jpg"
            alt="Iced latte with espresso and milk swirling together on a wooden table"
            eager
            className="menu-hero-image"
          />
        </div>
      </div>
      <MenuSection full />
    </>
  );
}
