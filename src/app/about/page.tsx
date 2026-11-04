import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReservationForm from "@/components/ReservationForm";
export const metadata: Metadata = { title: "Our Story" };
export default function AboutPage() {
  return (
    <>
      <div className="page-intro container">
        <p className="eyebrow">The story behind the cup</p>
        <h1>
          A little room
          <br />
          <em>for the good things.</em>
        </h1>
        <p>For early starts, slow afternoons, and everyone in between.</p>
      </div>
      <AboutSection full />
      <section className="section values-section">
        <div className="container">
          <h2>
            Little things.
            <br />
            <em>Deeply held.</em>
          </h2>
          <div className="values-grid">
            <article>
              <h3>Care in every cup.</h3>
              <p>
                We choose a house blend with character and give every drink the
                attention it deserves. Good coffee should feel simple.
              </p>
            </article>
            <article>
              <h3>Comfort on the table.</h3>
              <p>
                Familiar favorites, generous breakfasts, and something sweet to
                share. Food that makes an ordinary day feel good.
              </p>
            </article>
            <article>
              <h3>A welcome for everyone.</h3>
              <p>
                Students with a deadline, neighbors on a lunch break, and
                families making memories. There’s room for all of you.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ServicesSection />
      <ReservationForm />
    </>
  );
}
