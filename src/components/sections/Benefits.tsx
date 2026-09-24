type ProcessStep = {
  title: string;
  description: string;
};

const processSteps: readonly ProcessStep[] = [
  {
    title: "Le escribes",
    description:
      "Por WhatsApp o por teléfono. Cuéntale en pocas palabras qué está pasando.",
  },
  {
    title: "Consulta inicial",
    description:
      "Presencial en su estudio de Santo Domingo o en línea, según su disponibilidad. Revisa tu situación y te explica tus opciones en palabras claras.",
  },
  {
    title: "Propuesta clara",
    description:
      "Conoces los honorarios y los plazos estimados antes de empezar. Tú decides si continúas.",
  },
  {
    title: "Seguimiento en cada etapa",
    description:
      "Te mantiene al tanto de cómo avanza tu caso en cada audiencia, diligencia y trámite.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="benefits-section" aria-labelledby="benefits-title">
      <div className="benefits-grid">
        <div className="benefits-left">
          <h2 id="benefits-title" className="reveal font-serif section-title benefits-title">
            Antes de empezar sabrás cuánto cuesta, cuánto puede tardar y qué
            opciones reales tienes.
          </h2>
          <p className="reveal delay-1 benefits-desc">
            El Dr. Fabián Lapo te explica tu situación sin tecnicismos, para que
            decidas con toda la información sobre la mesa.
          </p>
          <a href="#cta" className="reveal delay-2 benefits-cta">
            Agendar una consulta
          </a>
        </div>

        <div className="benefits-right">
          <h3 className="reveal-right font-serif benefits-steps-title">
            Cómo trabaja el Dr. Lapo
          </h3>
          <ol className="benefits-steps">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className={`reveal-right delay-${Math.min(i + 1, 4)} benefits-step`}
              >
                <span className="font-serif benefits-step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className="font-serif benefits-step-title">{step.title}</p>
                  <p className="benefits-step-desc">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
