import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estudiojuridicoflapo.com"),
  title: {
    default: "Dr. Fabián Lapo | Abogado en Santo Domingo, Ecuador",
    template: "%s | Dr. Fabián Lapo Abogado",
  },
  description:
    "Abogado especialista en derecho civil, penal, tránsito, niñez y adolescencia, tierras y asesoría jurídica en Santo Domingo, Ecuador. Consulta gratis.",
  keywords: [
    "abogado santo domingo ecuador",
    "abogado civil santo domingo",
    "abogado penalista ecuador",
    "abogado de tránsito santo domingo",
    "juicio de alimentos ecuador",
    "asesoría jurídica santo domingo",
    "abogado de tierras ecuador",
    "Fabián Lapo abogado",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://estudiojuridicoflapo.com",
    siteName: "Dr. Fabián Lapo — Abogado",
    title: "Dr. Fabián Lapo | Abogado en Santo Domingo, Ecuador",
    description:
      "Especialista en derecho civil, penal, tránsito, niñez, tierras y asesoría jurídica integral en Ecuador.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dr. Fabián Lapo Abogado" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Fabián Lapo | Abogado Santo Domingo Ecuador",
    description: "Asesoría jurídica integral en Ecuador. Consulta gratis.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://estudiojuridicoflapo.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const entityJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://estudiojuridicoflapo.com/#website",
        url: "https://estudiojuridicoflapo.com",
        name: "Estudio Jurídico Dr. Fabián Lapo",
        inLanguage: "es-EC",
      },
      {
        "@type": "Person",
        "@id": "https://estudiojuridicoflapo.com/#person",
        name: "Dr. Fabián Edy Lapo Tandazo",
        jobTitle: "Abogado",
        worksFor: {
          "@id": "https://estudiojuridicoflapo.com/#legalservice",
        },
        knowsAbout: [
          "Derecho Civil",
          "Derecho Penal",
          "Derecho de Tránsito",
          "Niñez y Adolescencia",
          "Legalización de Tierras",
          "Trámites Notariales",
        ],
      },
      {
        "@type": "LegalService",
        "@id": "https://estudiojuridicoflapo.com/#legalservice",
        name: "Estudio Jurídico Dr. Fabián Lapo",
        description:
          "Estudio jurídico especializado en derecho civil, penal, tránsito, niñez y adolescencia, legalización de tierras y trámites notariales en Santo Domingo, Ecuador.",
        url: "https://estudiojuridicoflapo.com",
        image: "https://estudiojuridicoflapo.com/og-image.jpg",
        telephone: "+593990728407",
        areaServed: "Ecuador",
        foundingDate: "2017",
        founder: {
          "@id": "https://estudiojuridicoflapo.com/#person",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santo Domingo",
          addressRegion: "Santo Domingo de los Tsáchilas",
          addressCountry: "EC",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+593990728407",
          areaServed: "EC",
          availableLanguage: ["es"],
        },
      },
    ],
  };

  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityJsonLd) }}
        />
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
