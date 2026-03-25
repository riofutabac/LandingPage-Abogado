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
  metadataBase: new URL("https://fabianlapo.ec"),
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
    url: "https://fabianlapo.ec",
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
  alternates: { canonical: "https://fabianlapo.ec" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
