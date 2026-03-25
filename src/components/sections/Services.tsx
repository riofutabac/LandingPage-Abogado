"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── SVG Icons ── */
const ScaleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" /><path d="M4 7l8-4 8 4" /><path d="M4 7l4 5h-2a2 2 0 0 0 4 0H8" /><path d="M20 7l-4 5h2a2 2 0 0 1-4 0h2" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const CarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h14" /><path d="M3 11l2-6h14l2 6" /><rect x="3" y="11" width="18" height="6" rx="1" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
  </svg>
);
const DocumentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
  </svg>
);
const UsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const TerrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20l7.5-7.5L14 17l8-10" /><path d="M2 20h20" /><path d="M17 8h4v4" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const iconMap: Record<string, () => React.JSX.Element> = {
  civil: ScaleIcon,
  penal: ShieldIcon,
  transito: CarIcon,
  notarial: DocumentIcon,
  ninez: UsersIcon,
  tierras: TerrainIcon,
  asesoria: BriefcaseIcon,
};

const areas = [
  { key: "civil", title: "Derecho Civil", subtitle: "Abogados civiles en Santo Domingo", description: "Contratos, cobro de deudas, herencias, divorcios e indemnizaciones." },
  { key: "penal", title: "Derecho Penal", subtitle: "Defensa penal responsable en Ecuador", description: "Defensa técnica desde la detención hasta el juicio oral." },
  { key: "transito", title: "Tránsito", subtitle: "Abogados de tránsito en Santo Domingo", description: "Accidentes, multas ANT, suspensión de licencias y vehículos retenidos." },
  { key: "notarial", title: "Notarial", subtitle: "Gestiones notariales y documentos legales", description: "Escrituras públicas, poderes, testamentos y protocolización." },
  { key: "ninez", title: "Niñez y Adolescencia", subtitle: "Protección de derechos del menor", description: "Juicios de alimentos, tenencia, régimen de visitas y custodia." },
  { key: "tierras", title: "Tierras", subtitle: "Propiedad y regularización en Ecuador", description: "Saneamiento de terrenos, linderaciones y prescripción adquisitiva." },
  { key: "asesoria", title: "Asesoría Jurídica", subtitle: "Consultoría legal integral", description: "Consultas presenciales y en línea, contratos y acompañamiento." },
];

export default function Services() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const speedRef = useRef(0.5);

  // Duplicate items for infinite loop
  const items = [...areas, ...areas, ...areas];
  const CARD_WIDTH = 300;
  const GAP = 24;
  const CARD_TOTAL = CARD_WIDTH + GAP;

  const animate = useCallback(() => {
    if (!trackRef.current) return;

    if (!isPaused) {
      posRef.current -= speedRef.current;

      // Reset position for seamless loop
      const totalWidth = areas.length * CARD_TOTAL;
      if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current += totalWidth;
      }

      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused, CARD_TOTAL]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  // Arrow click — jump one full card width with smooth animation
  const scrollCarousel = (dir: number) => {
    if (!trackRef.current) return;
    setIsPaused(true);

    const target = posRef.current + dir * CARD_TOTAL * 2; // 2 cards per click for speed
    const startPos = posRef.current;
    const startTime = performance.now();
    const duration = 400;

    const animateScroll = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      posRef.current = startPos + (target - startPos) * eased;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }

      if (t < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsPaused(false);
      }
    };
    requestAnimationFrame(animateScroll);
  };

  // Mouse drag support
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const diff = e.clientX - dragStartX.current;
    posRef.current = dragStartPos.current + diff;
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  // Touch/swipe support
  const touchStartX = useRef(0);
  const touchStartPos = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartPos.current = posRef.current;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - touchStartX.current;
    posRef.current = touchStartPos.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <section ref={sectionRef} id="services" className="services-section">
      {/* Header */}
      <div className="services-header">
        <p className="reveal eyebrow">Áreas de Práctica</p>
        <h2 className="reveal delay-1 font-serif section-title">
          Servicios Legales<br />en Ecuador
        </h2>
        <p className="reveal delay-2 section-desc">
          Más de 7 áreas del derecho ecuatoriano atendidas por el Dr. Fabián Edy Lapo Tandazo
          con dedicación, claridad y resultados comprobados.
        </p>
      </div>

      {/* Carousel */}
      <div className="reveal delay-3 carousel-wrapper">
        {/* Arrow Left */}
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={() => scrollCarousel(1)}
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Track */}
        <div
          className="carousel-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => { isDragging.current = false; setIsPaused(false); }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={trackRef} className="carousel-track">
            {items.map((area, i) => {
              const Icon = iconMap[area.key];
              return (
                <div key={`${area.key}-${i}`} className="carousel-card">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3 className="font-serif service-card-title">{area.title}</h3>
                  <p className="service-card-subtitle">{area.subtitle}</p>
                  <p className="service-card-desc">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow Right */}
        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={() => scrollCarousel(-1)}
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
