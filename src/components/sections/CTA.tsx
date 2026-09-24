"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";
import {
  EMAIL,
  MAPS_EMBED_URL,
  MAPS_URL,
  OFFICE_HOURS,
  OFFICE_ADDRESS,
  PHONE_DISPLAY,
  PHONE_E164,
  whatsappUrl,
} from "@/content/contact";

function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={faq.q} className={`reveal delay-${Math.min(i + 1, 4)} faq-item`}>
            <button
              id={`faq-question-${i}`}
              className="faq-question"
              onClick={() => toggleFaq(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              type="button"
            >
              <span className="font-serif faq-question-text">{faq.q}</span>
              <svg
                className={`faq-chevron${isOpen ? " faq-chevron--open" : ""}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`faq-answer-wrapper${isOpen ? " faq-answer-wrapper--open" : ""}`}
            >
              <p className="faq-answer-text">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactMap() {
  return (
    <div className="reveal-right contact-map-block">
      <div className="contact-map">
        <iframe
          src={MAPS_EMBED_URL}
          title="Ubicación del estudio jurídico del Dr. Fabián Lapo en Santo Domingo"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p className="contact-map-caption">
        <span>{OFFICE_ADDRESS}</span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-map-link"
        >
          Cómo llegar en Google Maps <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  );
}

export default function CTA() {
  return (
    <>
      <section id="faq" className="faq-section" aria-labelledby="faq-title">
        <div className="faq-container">
          <h2 id="faq-title" className="reveal font-serif section-title faq-title">
            Preguntas frecuentes
          </h2>
          <FaqList />
        </div>
      </section>

      <section id="cta" className="cta-section" aria-labelledby="cta-title">
        <div className="cta-block">
          <div className="cta-info">
            <h2 id="cta-title" className="reveal font-serif cta-headline">
              Cuéntale tu caso al Dr. Lapo
            </h2>
            <p className="reveal delay-1 cta-desc">
              Escríbele o llámalo para coordinar una consulta, presencial o en
              línea. Todo lo que le cuentes es confidencial.
            </p>

            <div className="reveal delay-2 cta-buttons">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Escribir por WhatsApp
              </a>
              <a href={`tel:${PHONE_E164}`} className="btn-outline">
                Llamar al {PHONE_DISPLAY}
              </a>
            </div>

            <dl className="reveal delay-3 cta-details">
              <div className="cta-detail">
                <dt>Horario</dt>
                <dd>{OFFICE_HOURS}</dd>
              </div>
              <div className="cta-detail">
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} className="cta-email">
                    {EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <ContactMap />
        </div>
      </section>
    </>
  );
}
