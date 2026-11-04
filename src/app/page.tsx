import Hero from "@/components/Hero";
import SignatureSection from "@/components/SignatureSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import ReservationForm from "@/components/ReservationForm";
export default function Home() {
  return (
    <>
      <Hero />
      <SignatureSection />
      <AboutSection />
      <MenuSection />
      <ServicesSection />
      <ReservationForm />
    </>
  );
}
