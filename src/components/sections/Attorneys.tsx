import Image from "next/image";
import { FOUNDING_YEAR, whatsappUrl } from "@/content/contact";


const facts = [
  { figure: `Desde ${FOUNDING_YEAR}`, label: "ejerciendo en Ecuador" },
  { figure: "Presencial", label: "o en línea, según tu caso" },
] as const;

export default function Attorneys() {
  return (
    <section id="attorneys" className="attorneys-section">
      <h2 className="reveal font-serif section-title attorneys-title">
        Quién llevará tu caso
      </h2>

      <div className="attorneys-grid">
        {/* Photo — first in source so it leads on mobile */}
        <div className="reveal attorneys-card-container">
          <div className="attorneys-photo-card">
            <Image
              src="/.assets/abogado_portrait.webp"
              alt="Retrato del Dr. Fabián Lapo, abogado en Santo Domingo, Ecuador"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        </div>

        <div className="attorneys-info">
          <h3 className="reveal-left font-serif attorneys-name">
            Dr. Fabián Edy Lapo Tandazo
          </h3>
          <p className="reveal-left attorneys-role">
            Abogado verificado · Santo Domingo, Ecuador
          </p>
          <p className="reveal-left delay-1 attorneys-bio">
            El Dr. Lapo ejerce la abogacía en el sistema judicial ecuatoriano
            desde {FOUNDING_YEAR}. Lleva casos de derecho civil, penal, tránsito,
            niñez y adolescencia, tierras y trámites notariales, con un trato
            directo y claro en cada etapa.
          </p>
          <p className="reveal-left delay-1 attorneys-bio">
            Atiende en Santo Domingo de los Tsáchilas y en otras ciudades del
            país, acompañando a personas y familias en momentos difíciles.
          </p>

          <dl className="reveal-left delay-2 attorneys-stats">
            {facts.map((fact) => (
              <div key={fact.label} className="attorneys-stat">
                <dt className="font-serif attorneys-stat-figure">{fact.figure}</dt>
                <dd className="attorneys-stat-label">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-left delay-3 attorneys-link"
          >
            Escribir al Dr. Lapo por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
