import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web del estudio jurídico del Dr. Fabián Lapo.",
  alternates: { canonical: "https://estudiojuridicoflapo.com/terminos" },
};

export default function TerminosPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px 80px", lineHeight: 1.75 }}>
      <h1 className="font-serif" style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--brown-dark)" }}>
        Términos y Condiciones
      </h1>

      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        El uso de este sitio web implica la aceptación de estos términos. Si no estás de acuerdo,
        abstente de utilizar los servicios y contenidos publicados.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        1. Naturaleza informativa
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        El contenido de este sitio es de carácter informativo y no constituye, por sí solo, asesoría
        legal personalizada ni relación abogado-cliente.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        2. Responsabilidad
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        Cada caso requiere análisis individual. Las decisiones legales deben tomarse con asesoría directa
        y formal del profesional.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        3. Propiedad intelectual
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        El diseño, textos e identidad de marca de este sitio pertenecen a sus titulares y no pueden ser
        reproducidos sin autorización expresa.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        4. Modificaciones
      </h2>
      <p style={{ color: "var(--text-muted)" }}>
        Nos reservamos el derecho de actualizar estos términos en cualquier momento para reflejar cambios
        normativos o del servicio.
      </p>
    </main>
  );
}