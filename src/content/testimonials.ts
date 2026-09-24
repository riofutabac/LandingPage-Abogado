export interface Testimonial {
  quote: string;
  /** Nombre o iniciales, con permiso del cliente. */
  author: string;
  /** Área o tipo de caso, p. ej. "Juicio de alimentos". */
  caseType?: string;
  source?: "google" | "directo";
}

/**
 * Testimonios reales y autorizados. Mientras esté vacío, la sección
 * de testimonios no se renderiza.
 */
export const testimonials: readonly Testimonial[] = [];
