import type { JSX, ReactNode } from "react";
import { whatsappUrl } from "@/content/contact";

/* ── SVG icons (decorative, one stroke weight) ── */
const ICON_SIZE = 26;

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const FamilyIcon = () => (
  <IconFrame>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconFrame>
);

const ShieldIcon = () => (
  <IconFrame>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </IconFrame>
);

/** A land plot with dashed boundary lines and corner stakes. */
const PlotIcon = () => (
  <IconFrame>
    <path d="M4 18 6.5 6 18 4.5 20 17z" strokeDasharray="2.2 2.2" />
    <circle cx="4" cy="18" r="1.4" fill="currentColor" />
    <circle cx="6.5" cy="6" r="1.4" fill="currentColor" />
    <circle cx="18" cy="4.5" r="1.4" fill="currentColor" />
    <circle cx="20" cy="17" r="1.4" fill="currentColor" />
  </IconFrame>
);

const DocumentIcon = () => (
  <IconFrame>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </IconFrame>
);

const ArrowIcon = () => (
  <svg
    className="service-group-arrow"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

/* ── Content ── */
interface ServiceGroup {
  readonly key: string;
  readonly Icon: () => JSX.Element;
  readonly title: string;
  readonly items: readonly string[];
  readonly help: string;
  readonly linkLabel: string;
  /** Topic inserted into the prefilled WhatsApp message. */
  readonly topic: string;
}

const SERVICE_GROUPS: readonly ServiceGroup[] = [
  {
    key: "familia",
    Icon: FamilyIcon,
    title: "Familia y menores",
    items: [
      "Pensión de alimentos para tus hijos",
      "Tenencia y régimen de visitas",
      "Divorcio",
      "Herencias y reparto de bienes de un familiar",
    ],
    help: "El Dr. Lapo escucha tu situación, te explica tus opciones y te acompaña en el trámite o el juicio.",
    linkLabel: "Consultar sobre familia",
    topic: "un tema de familia o menores",
  },
  {
    key: "penal-transito",
    Icon: ShieldIcon,
    title: "Detenciones, denuncias y tránsito",
    items: [
      "Defensa penal desde la detención hasta el juicio",
      "Accidentes de tránsito",
      "Multas de la ANT y licencias suspendidas",
      "Vehículos retenidos",
    ],
    help: "El Dr. Lapo te orienta desde el primer momento y lleva tu defensa en cada etapa del proceso.",
    linkLabel: "Consultar sobre mi caso penal o de tránsito",
    topic: "un caso penal o de tránsito",
  },
  {
    key: "terrenos",
    Icon: PlotIcon,
    title: "Terrenos y propiedades",
    items: [
      "Legalizar o regularizar un terreno",
      "Deslindes: fijar los límites con tus vecinos",
      "Prescripción adquisitiva: cuando llevas años en un terreno sin escrituras",
      "Escrituras públicas",
      "Testamentos y trámites notariales",
    ],
    help: "El Dr. Lapo revisa los papeles que tengas y te explica qué trámite corresponde a tu terreno.",
    linkLabel: "Consultar sobre mi terreno",
    topic: "un terreno o propiedad",
  },
  {
    key: "contratos",
    Icon: DocumentIcon,
    title: "Contratos, deudas y trámites",
    items: [
      "Redacción y revisión de contratos",
      "Cobro de deudas",
      "Indemnizaciones por daños",
      "Poderes para que otra persona haga trámites por ti",
      "Asesoría presencial o en línea",
    ],
    help: "El Dr. Lapo te explica en palabras claras qué dice un documento o qué puedes reclamar, antes de que firmes o decidas.",
    linkLabel: "Consultar sobre contratos o deudas",
    topic: "contratos, deudas o trámites",
  },
];

/* ── Section ── */
export default function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-header">
        <h2 id="services-title" className="reveal font-serif section-title">
          ¿En qué te puede ayudar el Dr. Lapo?
        </h2>
        <p className="reveal delay-1 section-desc services-desc">
          Casos de familia, penales, de tránsito, de terrenos y de contratos en
          Santo Domingo de los Tsáchilas. Elige tu situación; si no la ves,
          escríbele igual y te orienta.
        </p>
      </div>

      <div className="services-grid">
        {SERVICE_GROUPS.map(({ key, Icon, title, items, help, linkLabel, topic }, i) => (
          <article key={key} className={`reveal delay-${i + 1} service-group`}>
            <div className="service-group-head">
              <span className="service-group-icon">
                <Icon />
              </span>
              <h3 className="font-serif service-group-title">{title}</h3>
            </div>
            <ul className="service-group-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="service-group-help">{help}</p>
            <a
              href={whatsappUrl(`Hola Dr. Lapo, quisiera una consulta sobre ${topic}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-group-link"
              aria-label={`${linkLabel} por WhatsApp (se abre en una pestaña nueva)`}
            >
              {linkLabel}
              <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
