import Link from "next/link";
import CafeImage from "./CafeImage";
import Arrow from "./Arrow";
export default function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`section about-section ${full ? "about-section--full" : ""}`}
      id="about"
    >
      <div className="container about-grid">
        <div className="about-images">
          <CafeImage
            src="/images/cafe-interior.jpg"
            alt="A welcoming café filled with warm light and places to linger"
            className="about-photo"
            eager={full}
          />
          <CafeImage
            src="/images/coffee-closeup.jpg"
            alt="Freshly made coffee, served in a ceramic cup"
            className="about-inset"
            sizes="(max-width: 700px) 35vw, 22vw"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">There’s room for you here</p>
          <h2>
            A small café.
            <br />A softer pace.
            <br />
            <em>A familiar feeling.</em>
          </h2>
          <p>
            Raum began with a simple idea: the best part of a café isn’t just
            what’s in your cup. It’s the space it gives you to slow down, catch
            up, and feel a little more at home.
          </p>
          <p>
            So we bring together house-blended coffee, comforting food, and a
            warm seat for whoever walks through the door. A study break, a
            working lunch, a family catch-up. Make it your moment.
          </p>
          {full ? (
            <p>
              We believe in thoughtful little things: a carefully pulled
              espresso, a freshly made breakfast, and time to enjoy both.
              Nothing hurried. Everyone welcome.
            </p>
          ) : (
            <Link href="/about" className="text-link">
              Get to know Raum <Arrow diagonal />
            </Link>
          )}
          <span className="about-signature script">With love, Raum</span>
        </div>
      </div>
    </section>
  );
}
