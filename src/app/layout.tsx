import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";
import {
  EMAIL,
  FOUNDING_YEAR,
  MAPS_URL,
  OFFICE_GEO,
  PHONE_E164,
  OFFICE_POSTAL_CODE,
  OFFICE_STREET,
} from "@/content/contact";

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
    "Abogado especialista en derecho civil, penal, tránsito, niñez y adolescencia, tierras y asesoría jurídica en Santo Domingo, Ecuador.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Fabián Lapo | Abogado Santo Domingo Ecuador",
    description: "Asesoría jurídica integral en Santo Domingo y todo Ecuador.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://estudiojuridicoflapo.com" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F5F0E8",
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
        telephone: PHONE_E164,
        email: EMAIL,
        areaServed: "Ecuador",
        foundingDate: String(FOUNDING_YEAR),
        founder: {
          "@id": "https://estudiojuridicoflapo.com/#person",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: OFFICE_STREET,
          postalCode: OFFICE_POSTAL_CODE,
          addressLocality: "Santo Domingo",
          addressRegion: "Santo Domingo de los Tsáchilas",
          addressCountry: "EC",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: OFFICE_GEO.latitude,
          longitude: OFFICE_GEO.longitude,
        },
        hasMap: MAPS_URL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: PHONE_E164,
          email: EMAIL,
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
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
