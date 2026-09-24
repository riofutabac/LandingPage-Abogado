import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/layout/LegalPageShell";
import { EMAIL } from "@/content/contact";

export const metadata: Metadata = {
  title: "Términos de uso",
  description:
    "Condiciones de uso del sitio web del Dr. Fabián Lapo, abogado en Santo Domingo, Ecuador.",
  alternates: { canonical: "https://estudiojuridicoflapo.com/terminos" },
};

const UPDATED_ON = "24 de septiembre de 2026";
const UPDATED_ON_ISO = "2026-09-24";

export default function TerminosPage() {
  return (
    <LegalPageShell
      title="Términos de uso"
      updatedOn={UPDATED_ON}
      updatedOnIso={UPDATED_ON_ISO}
      intro={
        <p>
          Estas condiciones regulan el uso de este sitio web del Dr. Fabián
          Edy Lapo Tandazo. Al navegar por él aceptas estos términos; si no
          estás de acuerdo, no lo utilices.
        </p>
      }
    >
      <section aria-labelledby="informativo">
        <h2 id="informativo">La información del sitio es general</h2>
        <p>
          Los textos de este sitio explican de forma general los servicios del
          Dr. Lapo y algunos temas legales. No son asesoría jurídica para tu
          caso concreto. Cada situación requiere un análisis individual, y las
          decisiones legales deben tomarse después de una consulta directa con
          el abogado.
        </p>
      </section>

      <section aria-labelledby="relacion">
        <h2 id="relacion">Cuándo empieza la relación abogado-cliente</h2>
        <p>
          Navegar por este sitio o enviar un mensaje por WhatsApp, teléfono o
          correo no crea una relación abogado-cliente. Esa relación solo existe
          cuando el Dr. Lapo acepta expresamente tu caso y ambos acuerdan las
          condiciones del servicio.
        </p>
        <p>
          Aun así, lo que le cuentes al escribirle se trata con
          confidencialidad, como se explica en la{" "}
          <Link href="/privacidad">política de privacidad</Link>.
        </p>
      </section>

      <section aria-labelledby="responsabilidad">
        <h2 id="responsabilidad">Responsabilidad</h2>
        <p>
          El contenido se revisa con cuidado, pero las normas cambian y pueden
          existir errores u omisiones. El Dr. Lapo no se hace responsable de
          las decisiones que tomes basándote solo en la información publicada
          aquí, sin una consulta previa.
        </p>
        <p>
          Los enlaces a sitios de terceros, como WhatsApp o Google Maps, se
          ofrecen por comodidad. Su contenido y funcionamiento dependen de
          esos terceros.
        </p>
      </section>

      <section aria-labelledby="propiedad">
        <h2 id="propiedad">Propiedad intelectual</h2>
        <p>
          Los textos, el diseño y la identidad visual de este sitio pertenecen
          a su titular. No pueden reproducirse sin autorización expresa.
        </p>
      </section>

      <section aria-labelledby="modificaciones">
        <h2 id="modificaciones">Cambios en estos términos</h2>
        <p>
          Estos términos pueden actualizarse para reflejar cambios normativos
          o del servicio. La versión vigente es siempre la publicada en esta
          página, con su fecha de actualización.
        </p>
      </section>

      <section aria-labelledby="contacto">
        <h2 id="contacto">Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos, escribe a{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>
    </LegalPageShell>
  );
}
