"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefitItems = [
  {
    icon: "experience",
    title: "Representación Legal Sólida",
    description:
      "Defensa técnica y estratégica en cada etapa del proceso judicial. Conocemos los juzgados y tribunales de Santo Domingo y del Ecuador.",
  },
  {
    icon: "clarity",
    title: "Claridad sin Tecnicismos",
    description:
      "Te explicamos tu caso paso a paso, en palabras claras. Cuentas claras desde el primer contacto: honorarios, plazos y probabilidades reales.",
  },
  {
    icon: "support",
    title: "Acompañamiento Permanente",
    description:
      "Estamos contigo en cada audiencia, diligencia y trámite. No te dejamos solo frente al sistema judicial ecuatoriano.",
  },
];

const BenefitIcon = ({ type }: { type: string }) => {
  if (type === "experience") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (type === "clarity") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

export default function Benefits() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="benefits" className="benefits-section">
      <div className="benefits-grid">
        {/* Left */}
        <div className="benefits-left">
          <p className="reveal eyebrow" style={{ color: "var(--gold-accent)" }}>
            Por qué elegirnos
          </p>
          <h2 className="reveal delay-1 font-serif section-title" style={{ color: "var(--cream)" }}>
            Experiencia,<br />Claridad y<br />Acompañamiento
          </h2>
          <p className="reveal delay-2 benefits-desc">
            El Dr. Fabián Lapo combina experiencia en el derecho ecuatoriano con un
            trato cercano. Tu problema legal tiene solución — te ayudamos a encontrarla.
          </p>

          {/* Professional initials card */}
          <div className="reveal delay-3 benefits-attorney-card">
            <div className="benefits-initials">
              <span className="font-serif">FL</span>
            </div>
            <div>
              <p className="font-serif benefits-attorney-name">Dr. Fabián Lapo</p>
              <p className="benefits-attorney-role">Abogado Principal</p>
            </div>
          </div>

          <a href="#cta" className="reveal delay-4 btn-outline-light">
            Contactar Ahora
          </a>
        </div>

        {/* Right */}
        <div className="benefits-right">
          {benefitItems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal-right delay-${i + 1} benefits-item`}
              style={{
                borderBottom: i < benefitItems.length - 1 ? "1px solid rgba(245,240,232,.1)" : "none",
              }}
            >
              <div className="benefits-item-header">
                <div className="benefits-item-icon">
                  <BenefitIcon type={item.icon} />
                </div>
                <h3 className="font-serif benefits-item-title">
                  {item.title}
                </h3>
              </div>
              <p className="benefits-item-desc">
                {item.description}
              </p>
            </div>
          ))}

          {/* Stats row */}
          <div className="reveal-right delay-4 benefits-stats">
            {[
              { num: "7+", label: "Áreas del Derecho" },
              { num: "10+", label: "Años de Experiencia" },
              { num: "500+", label: "Casos Atendidos" },
            ].map((stat) => (
              <div key={stat.label} className="benefits-stat-item">
                <p className="font-serif benefits-stat-num">
                  {stat.num}
                </p>
                <p className="benefits-stat-label">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
