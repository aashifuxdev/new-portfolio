import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar theme="dark" />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
