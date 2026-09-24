import { FOUNDING_YEAR } from "@/content/contact";

export type FaqItem = {
  q: string;
  a: string;
};

export const faqs: readonly FaqItem[] = [
  {
    q: "¿Cómo agendo una consulta?",
    a: "Escríbele al Dr. Lapo por WhatsApp o llámalo. La consulta puede ser presencial en su estudio de Santo Domingo o en línea, en el horario que acuerden según su disponibilidad.",
  },
  {
    q: "¿Cuánto cobra el Dr. Lapo?",
    a: "Los honorarios dependen del tipo de caso y de su complejidad. En la consulta el Dr. Lapo revisa tu situación y te explica con claridad los honorarios y los plazos estimados antes de empezar.",
  },
  {
    q: "¿Mi consulta es confidencial?",
    a: "Sí. Todo lo que le cuentes al Dr. Lapo está protegido por el secreto profesional del abogado, así que puedes explicarle tu situación con tranquilidad.",
  },
  {
    q: "¿Qué áreas legales atiende el Dr. Lapo?",
    a: `Derecho civil, penal, de tránsito, de niñez y adolescencia, legalización de tierras y trámites notariales. Ejerce desde ${FOUNDING_YEAR} en Santo Domingo.`,
  },
  {
    q: "¿Atiende casos fuera de Santo Domingo?",
    a: "Sí, el Dr. Lapo atiende casos en todo Ecuador. Los trámites que no requieren presencia física pueden gestionarse en línea.",
  },
  {
    q: "¿Cuánto tarda un juicio de alimentos en Ecuador?",
    a: "Depende de cada caso: del juzgado, de la complejidad y de cómo avance el proceso. En la consulta, el Dr. Lapo revisa tu situación y te explica qué esperar.",
  },
  {
    q: "¿Qué debo llevar a la primera cita?",
    a: "Tu cédula y los documentos relacionados con el caso: contratos, notificaciones, fotografías u otros respaldos. Si no tienes documentos, igual puede orientarte.",
  },
];
