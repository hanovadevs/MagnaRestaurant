import Link from "next/link";
import Arrow from "./Arrow";
const services = [
  {
    title: "Make yourself at home.",
    text: "A quiet corner for your book, a table for your friends, or a little space to get things done.",
    link: "Find your seat",
    href: "/contact#reserve",
  },
  {
    title: "Good things to go.",
    text: "A coffee for the walk. Lunch for a busy day. Build a little list of your favorites before you visit.",
    link: "Pick your favorites",
    href: "/menu",
  },
  {
    title: "Better, together.",
    text: "Long-overdue catch-ups and little celebrations. Tell us what you have in mind and we’ll make room.",
    link: "Let’s make a plan",
    href: "/contact",
  },
];
export default function ServicesSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">Your day, your way</p>
          <h2>
            A little space.
            <br />
            <em>So many possibilities.</em>
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href={service.href} className="text-link">
                {service.link} <Arrow diagonal />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
