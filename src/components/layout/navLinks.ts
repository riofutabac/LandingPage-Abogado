/**
 * Site-wide navigation. Hrefs are root-relative ("/#id") so they work from
 * the home page and from sub-pages such as /privacidad and /terminos.
 */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Servicios", href: "/#services" },
  { label: "Sobre el Dr. Lapo", href: "/#attorneys" },
  { label: "Preguntas", href: "/#faq" },
  { label: "Contacto", href: "/#cta" },
];

export const LEGAL_LINKS: readonly NavLink[] = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos de uso", href: "/terminos" },
];
