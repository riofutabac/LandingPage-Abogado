import Link from "next/link";
import {
  EMAIL,
  MAPS_URL,
  OFFICE_HOURS,
  OFFICE_ADDRESS,
  PHONE_DISPLAY,
  PHONE_E164,
  whatsappUrl,
} from "@/content/contact";
import { ChatIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./ContactIcons";
import MobileContactBar from "./MobileContactBar";
import { LEGAL_LINKS, NAV_LINKS } from "./navLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="font-serif footer-brand">Dr. Fabián Lapo</p>
            <p className="footer-brand-sub">Abogado · Ecuador</p>
            <p className="footer-desc">
              El Dr. Lapo te asesora en Santo Domingo de los Tsáchilas y en todo
              Ecuador: civil, penal, tránsito, niñez y adolescencia, tierras y
              trámites notariales.
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Navegación</h2>
            <nav className="footer-nav" aria-label="Pie de página">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="footer-heading">Contacto</h2>
            <ul className="footer-contact">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ChatIcon className="footer-icon" size={16} />
                  Escríbele por WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_E164}`} className="footer-link">
                  <PhoneIcon className="footer-icon" size={16} />
                  Llamadas: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="footer-link footer-link--email">
                  <MailIcon className="footer-icon" size={16} />
                  {EMAIL}
                </a>
              </li>
              <li className="footer-link-text">
                <ClockIcon className="footer-icon" size={16} />
                {OFFICE_HOURS}
              </li>
              <li className="footer-link-text footer-location">
                <PinIcon className="footer-icon" size={16} />
                <span>
                  {OFFICE_ADDRESS}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-map-link"
                  >
                    Ver ubicación en Google Maps
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Dr. Fabián Edy Lapo Tandazo. Todos los derechos reservados.
          </p>
          <nav className="footer-legal" aria-label="Legal">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="footer-legal-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
      <MobileContactBar />
    </>
  );
}
