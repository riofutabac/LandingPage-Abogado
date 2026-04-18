import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Attorneys from "@/components/sections/Attorneys";
import Benefits from "@/components/sections/Benefits";
import Cta from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { faqs } from "@/content/faqs";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Attorneys />
        <Benefits />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
