"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/content/contact";
import { ChatIcon } from "./ContactIcons";
import { NAV_LINKS } from "./navLinks";

const SCROLL_THRESHOLD_PX = 40;
/** Must match the max-width of the mobile-nav media query in globals.css. */
const DESKTOP_QUERY = "(min-width: 1025px)";
const NAV_ID = "navbar-nav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback((shouldRestoreFocus: boolean) => {
    setIsMenuOpen(false);
    if (shouldRestoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the drawer is open: lock page scroll, close on Esc, close if the
  // viewport grows to desktop, and move focus into the drawer.
  useEffect(() => {
    if (!isMenuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [isMenuOpen, closeMenu]);

  const headerClass = `navbar${isScrolled ? " navbar--scrolled" : ""}${
    isMenuOpen ? " navbar--menu-open" : ""
  }`;

  return (
    <>
      <header className={headerClass}>
        <Link href="/" className="font-serif navbar-brand">
          Dr. Fabián Lapo
          <span className="navbar-brand-sub">Abogado · Ecuador</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="navbar-hamburger"
          onClick={() => (isMenuOpen ? closeMenu(false) : setIsMenuOpen(true))}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls={NAV_ID}
        >
          <span className="hamburger-bar" aria-hidden="true" />
          <span className="hamburger-bar" aria-hidden="true" />
          <span className="hamburger-bar" aria-hidden="true" />
        </button>

        <nav
          ref={navRef}
          id={NAV_ID}
          aria-label="Principal"
          className={`navbar-nav${isMenuOpen ? " navbar-nav--open" : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={() => closeMenu(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar-cta"
            onClick={() => closeMenu(false)}
          >
            <ChatIcon size={16} />
            WhatsApp
          </a>
        </nav>
      </header>

      <div
        className={`navbar-scrim${isMenuOpen ? " navbar-scrim--visible" : ""}`}
        onClick={() => closeMenu(true)}
        aria-hidden="true"
      />
    </>
  );
}
