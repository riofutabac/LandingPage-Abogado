const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#attorneys" },
  { label: "Contacto", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <p className="font-serif footer-brand">Dr. Fabián Lapo</p>
          <p className="footer-brand-sub">Abogado · Ecuador</p>
          <p className="footer-desc">
            Asesoría jurídica integral en Santo Domingo de los Tsáchilas y a nivel nacional.
            Civil · Penal · Tránsito · Niñez · Tierras · Notarial.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="footer-heading">Navegación</p>
          <nav className="footer-nav">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="footer-heading">Contacto</p>
          <div className="footer-contact">
            <a
              href="https://wa.me/593990728407"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp: +593 99 072 8407
            </a>
            <p className="footer-link-text">
              Santo Domingo de los Tsáchilas, Ecuador
            </p>
            <p className="footer-link-text">
              Lunes a Viernes · 8:00 – 18:00
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Dr. Fabián Edy Lapo Tandazo. Todos los derechos reservados.
        </p>
        <div className="footer-legal">
          <a href="/privacidad" className="footer-legal-link">
            Política de Privacidad
          </a>
          <a href="/terminos" className="footer-legal-link">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
