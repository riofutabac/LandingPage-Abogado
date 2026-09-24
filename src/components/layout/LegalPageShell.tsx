import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LegalPageShellProps {
  title: string;
  /** Human-readable date, e.g. "24 de septiembre de 2026". */
  updatedOn: string;
  /** ISO date for the <time> element, e.g. "2026-09-24". */
  updatedOnIso: string;
  intro?: ReactNode;
  children: ReactNode;
}

export default function LegalPageShell({
  title,
  updatedOn,
  updatedOnIso,
  intro,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="legal-page">
        <article className="legal-article">
          <header className="legal-header">
            <Link href="/" className="legal-back">
              Volver al inicio
            </Link>
            <h1 className="font-serif legal-title">{title}</h1>
            <p className="legal-updated">
              Última actualización:{" "}
              <time dateTime={updatedOnIso}>{updatedOn}</time>
            </p>
            {intro ? <div className="legal-intro">{intro}</div> : null}
          </header>
          <div className="legal-body">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
