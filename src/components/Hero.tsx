import Link from "next/link";
import Arrow from "./Arrow";
import CafeImage from "./CafeImage";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Your everyday, a little lovelier</p>
          <h1>
            Good coffee.
            <br />
            Unhurried
            <br />
            <em>moments.</em>
          </h1>
          <p className="hero-description">
            A cup made with care. A seat that feels like yours.
            <br className="desktop-only" /> Welcome to Raum, your little pause
            in the city.
          </p>
          <div className="hero-buttons">
            <Link href="/menu" className="button button--primary">
              Find your favorite <Arrow />
            </Link>
            <Link href="/about" className="text-link">
              A little about us <Arrow diagonal />
            </Link>
          </div>
          <p className="hero-note">
            House-blended coffee. Warm welcomes. Every day.
          </p>
        </div>
        <div className="hero-visual">
          <CafeImage
            src="/images/raum-coffee.jpg"
            alt="Espresso swirling through milk in a glass of iced latte on a wooden café table"
            eager
            sizes="(max-width: 700px) 100vw, 52vw"
            className="hero-photo"
          />
          <div className="hero-caption">
            <span>Made for the moment.</span>
            <span className="script">Made for you.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
