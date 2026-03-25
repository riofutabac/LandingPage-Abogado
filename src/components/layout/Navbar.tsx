"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#attorneys" },
  { label: "Contacto", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#hero" className="font-serif navbar-brand">
        Dr. Fabián Lapo
        <span className="navbar-brand-sub">Abogado · Ecuador</span>
      </a>

      {/* Mobile hamburger */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span className={`hamburger-bar ${menuOpen ? "hamburger-bar--open" : ""}`} />
        <span className={`hamburger-bar ${menuOpen ? "hamburger-bar--open" : ""}`} />
        <span className={`hamburger-bar ${menuOpen ? "hamburger-bar--open" : ""}`} />
      </button>

      <nav className={`navbar-nav ${menuOpen ? "navbar-nav--open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://wa.me/593990728407"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary navbar-cta"
        >
          Consulta Gratis
        </a>
      </nav>
    </header>
  );
}
