import { PHONE_E164, whatsappUrl } from "@/content/contact";
import { ChatIcon, PhoneIcon } from "./ContactIcons";

/**
 * Thumb-reach contact bar, shown only below 768px (see globals.css).
 * Rendered from the Footer so every page that uses the Footer gets it.
 */
export default function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Contacto rápido">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-contact-btn mobile-contact-btn--primary"
      >
        <ChatIcon size={18} />
        WhatsApp
      </a>
      <a href={`tel:${PHONE_E164}`} className="mobile-contact-btn">
        <PhoneIcon size={18} />
        Llamar
      </a>
    </nav>
  );
}
