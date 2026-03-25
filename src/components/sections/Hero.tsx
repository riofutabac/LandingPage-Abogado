"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const statueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statueRef.current;
    if (!el) return;

    // On scroll: statue fades out and sinks
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 600;
          const progress = Math.min(scrollY / maxScroll, 1);
          el.style.opacity = String(1 - progress);
          el.style.transform = `translateY(${progress * 80}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left — Text (always on top) */}
        <div className="hero-text">
          <p className="reveal eyebrow">
            Estudio Jurídico · Santo Domingo, Ecuador
          </p>
          <h1 className="reveal delay-1 font-serif hero-headline">
            Asesoría Jurídica<br />Integral y<br />de Alta Calidad
          </h1>
          <p className="reveal delay-2 hero-subtitle">
            Conocemos a fondo el sistema judicial ecuatoriano.
            Resolvemos tu caso con rapidez, estrategia y honestidad
            en Santo Domingo y en todo Ecuador.
          </p>
          <div className="reveal delay-3 hero-cta-group">
            <a
              href="https://wa.me/593990728407"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consulta Gratis por WhatsApp
            </a>
            <a href="#services" className="btn-outline">
              Ver Servicios
            </a>
          </div>

          <div className="reveal delay-4 hero-services-list">
            <span className="hero-service-tag">Civil</span>
            <span className="hero-service-divider">·</span>
            <span className="hero-service-tag">Penal</span>
            <span className="hero-service-divider">·</span>
            <span className="hero-service-tag">Tránsito</span>
            <span className="hero-service-divider">·</span>
            <span className="hero-service-tag">Niñez</span>
            <span className="hero-service-divider">·</span>
            <span className="hero-service-tag">Tierras</span>
            <span className="hero-service-divider">·</span>
            <span className="hero-service-tag">Notarial</span>
          </div>
        </div>

        {/* Right — Large statue image, transparent PNG */}
        <div ref={statueRef} className="hero-statue">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/.assets/estatuaJusticia.png?v=2"
            alt="Estatua de la Justicia"
            className="hero-statue-img"
          />
        </div>
      </div>

      {/* Background watermark */}
      <div className="hero-watermark font-serif">ABOGADO</div>
    </section>
  );
}
