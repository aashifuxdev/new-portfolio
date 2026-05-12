import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main>
      <Navbar theme="dark" />
      <Hero />
      <WorkSection />
      <CtaSection />
    </main>
  );
}
