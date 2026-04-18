import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad del estudio jurídico del Dr. Fabián Lapo en Santo Domingo, Ecuador.",
  alternates: { canonical: "https://estudiojuridicoflapo.com/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px 80px", lineHeight: 1.75 }}>
      <h1 className="font-serif" style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--brown-dark)" }}>
        Política de Privacidad
      </h1>

      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        En el estudio jurídico del Dr. Fabián Lapo tratamos tus datos personales con confidencialidad y
        respeto a la normativa aplicable en Ecuador.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        1. Datos que recopilamos
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        Podemos recopilar nombre, teléfono, correo electrónico y la información que compartes de forma
        voluntaria para atender tu consulta legal.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        2. Finalidad del tratamiento
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        Usamos tus datos para responder solicitudes, coordinar asesorías jurídicas y mantener una
        comunicación profesional sobre tu caso.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        3. Confidencialidad
      </h2>
      <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
        La información compartida se mantiene bajo estricta reserva profesional y no se comercializa ni
        cede a terceros, salvo obligación legal.
      </p>

      <h2 className="font-serif" style={{ fontSize: "1.3rem", margin: "2rem 0 0.75rem", color: "var(--brown-dark)" }}>
        4. Contacto
      </h2>
      <p style={{ color: "var(--text-muted)" }}>
        Para consultas sobre esta política puedes escribir al canal oficial de contacto publicado en este
        sitio web.
      </p>
    </main>
  );
}