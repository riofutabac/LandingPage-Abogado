"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { faqs } from "@/content/faqs";

export default function CTA() {
  const ref = useScrollReveal<HTMLElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={ref} id="cta" className="cta-section">
      {/* FAQ block */}
      <div className="faq-container">
        <p className="reveal eyebrow" style={{ textAlign: "center" }}>
          Preguntas Frecuentes
        </p>
        <h2 className="reveal delay-1 font-serif section-title" style={{ textAlign: "center", marginBottom: "48px" }}>
          Lo Que Más Nos Preguntan
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.q} className={`reveal delay-${Math.min(i + 1, 4)} faq-item`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="font-serif faq-question-text">{faq.q}</span>
                  <svg
                    className="faq-chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "20px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease, opacity 0.3s ease, padding-bottom 0.4s ease",
                  }}
                >
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA block */}
      <div className="cta-block">
        <p className="reveal eyebrow">Contáctanos</p>
        <h2 className="reveal delay-1 font-serif cta-headline">
          ¿Necesitas un Abogado<br />Urgente? Hablemos Hoy.
        </h2>
        <p className="reveal delay-2 cta-desc">
          Escríbenos por WhatsApp o llámanos. Evaluamos tu caso de inmediato,
          sin costo y sin compromiso.
        </p>

        <div className="reveal delay-3 cta-buttons">
          <a
            href="https://wa.me/593990728407"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            WhatsApp Ahora
          </a>
          <a href="tel:+593990728407" className="btn-outline">
            Llamar
          </a>
        </div>

        <p className="reveal delay-4 font-serif cta-quote">
          &ldquo;Tu familia y tu patrimonio merecen la mejor defensa.
          El Dr. Fabián Lapo está listo para ayudarte en Santo Domingo y en todo Ecuador.&rdquo;
        </p>
      </div>
    </section>
  );
}
