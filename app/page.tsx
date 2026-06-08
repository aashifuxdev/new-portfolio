import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import WorkSection from "@/components/WorkSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar theme="dark" />
      <Hero />
      <StatsSection />
      <WorkSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
