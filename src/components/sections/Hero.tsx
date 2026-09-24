"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FOUNDING_YEAR, whatsappUrl } from "@/content/contact";

const STATUE_FADE_DISTANCE_PX = 600;
const STATUE_SINK_PX = 80;

export default function Hero() {
  const statueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statueRef.current;
    if (!el) return;

    // On scroll: statue fades out and sinks
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / STATUE_FADE_DISTANCE_PX, 1);
        el.style.opacity = String(1 - progress);
        el.style.transform = `translateY(${progress * STATUE_SINK_PX}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left — Text. Above the fold: no .reveal, so it renders visible without JS. */}
        <div className="hero-text">
          <p className="eyebrow hero-eyebrow">Estudio Jurídico Fabián Lapo</p>
          <h1 className="font-serif hero-headline">
            Tu abogado en Santo Domingo, de la primera consulta a la sentencia
          </h1>
          <p className="hero-subtitle">
            Casos civiles, penales, de tránsito, alimentos y tenencia, tierras y
            trámites notariales. Consultas presenciales o por
            WhatsApp, con explicaciones claras y sin tecnicismos.
          </p>
          <div className="hero-cta-group">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Escribir por WhatsApp
            </a>
            <a href="#services" className="btn-outline">
              Ver servicios
            </a>
          </div>

          <div className="hero-trust">
            <Image
              src="/.assets/abogado_portrait.webp"
              alt=""
              width={44}
              height={44}
              className="hero-trust-photo"
            />
            <p className="hero-trust-text">
              <span className="hero-trust-name">Dr. Fabián Lapo</span>
              <span>
                Ejerciendo desde {FOUNDING_YEAR} · Santo Domingo de los Tsáchilas
              </span>
            </p>
          </div>
        </div>

        {/* Right — Large statue image, transparent PNG */}
        <div ref={statueRef} className="hero-statue">
          <Image
            src="/.assets/estatuaJusticia.webp"
            alt="Estatua de la Justicia del estudio jurídico del Dr. Fabián Lapo en Santo Domingo, Ecuador"
            className="hero-statue-img"
            width={986}
            height={1536}
            priority
            sizes="(max-width: 1024px) 60vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}
