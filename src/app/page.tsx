import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Attorneys from "@/components/sections/Attorneys";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Attorneys />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
