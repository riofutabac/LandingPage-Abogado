"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const statCircles = [
  { percent: 90, label: "Casos\nResueltos", offset: 28.9, posClass: "stat-top-right" },
  { percent: 98, label: "Clientes\nSatisfechos", offset: 5.78, posClass: "stat-bottom-left" },
];

function StatCircle({ percent, label, offset }: { percent: number; label: string; offset: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("animated"); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-circle-wrapper stat-badge"
      style={{ ["--offset" as string]: String(offset) }}
    >
      <svg viewBox="0 0 100 100" className="stat-svg">
        <circle className="stat-bg" cx="50" cy="50" r="46" />
        <circle className="stat-progress" cx="50" cy="50" r="46" />
      </svg>
      <span className="font-serif stat-percent">{percent}%</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Attorneys() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="attorneys" className="attorneys-section">
      <h2 className="reveal font-serif section-title" style={{ textAlign: "center", marginBottom: "60px" }}>
        Abogado Verificado<br />y de Confianza
      </h2>

      <div className="attorneys-grid">
        {/* Left — Info */}
        <div className="attorneys-info">
          <div className="reveal-left attorneys-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>Abogado Colegiado · Verificado</span>
          </div>

          <h4 className="reveal-left font-serif attorneys-subtitle">
            Abogado Principal · Colegiado
          </h4>
          <p className="reveal-left delay-1 font-serif attorneys-name">
            Dr. Fabián Edy<br />Lapo Tandazo
          </p>
          <p className="reveal-left delay-1 attorneys-location">
            Santo Domingo, Ecuador
          </p>
          <p className="reveal-left delay-2 attorneys-bio">
            Abogado con amplia trayectoria en el sistema judicial ecuatoriano. Experto en derecho
            civil, penal, tránsito, niñez y adolescencia, tierras y trámites notariales. Su enfoque
            combina estrategia legal sólida con un trato humano y transparente.
          </p>
          <p className="reveal-left delay-2 attorneys-bio">
            Atiende casos en Santo Domingo de los Tsáchilas y a nivel nacional, acompañando a
            personas y familias en sus momentos más difíciles con dedicación y resultados concretos.
          </p>
          <a href="#cta" className="reveal-left delay-3 attorneys-link">
            Agendar Consulta →
          </a>
        </div>

        {/* Right — Photo Card + Stats */}
        <div className="reveal-right delay-2 attorneys-card-container">
          <div className="attorneys-card-wrapper">
            <div className="attorneys-photo-card">
              <Image
                src="/.assets/abogado_portrait.png"
                alt="Dr. Fabián Lapo — Abogado en Santo Domingo, Ecuador"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 768px) 90vw, 400px"
              />
              {/* Gradient overlay */}
              <div className="attorneys-photo-overlay">
                <p className="font-serif attorneys-card-name">Dr. Fabián Lapo</p>
                <p className="attorneys-card-role">Abogado · Santo Domingo, Ecuador</p>
              </div>
            </div>

            {/* Stat badges overlapping the card */}
            {statCircles.map((c) => (
              <div key={c.label} className={`attorneys-stat-badge ${c.posClass}`}>
                <StatCircle percent={c.percent} label={c.label} offset={c.offset} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
