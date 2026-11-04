import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ReservationForm from "@/components/ReservationForm";
export const metadata: Metadata = { title: "Visit & Contact" };
export default function ContactPage() {
  return (
    <>
      <div className="page-intro container">
        <p className="eyebrow">A little pause is closer than you think</p>
        <h1>
          Come on in.
          <br />
          <em>Stay a little.</em>
        </h1>
        <p>A table, a cup, and some time that’s all yours.</p>
      </div>
      <ContactSection />
      <ReservationForm />
    </>
  );
}
