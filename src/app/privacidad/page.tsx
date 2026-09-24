import type { Metadata } from "next";
import LegalPageShell from "@/components/layout/LegalPageShell";
import { EMAIL, OFFICE_LOCALITY } from "@/content/contact";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo el Dr. Fabián Lapo trata los datos personales que le envías por WhatsApp, teléfono o correo, conforme a la LOPDP de Ecuador.",
  alternates: { canonical: "https://estudiojuridicoflapo.com/privacidad" },
};

const UPDATED_ON = "24 de septiembre de 2026";
const UPDATED_ON_ISO = "2026-09-24";

export default function PrivacidadPage() {
  const mailto = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

  return (
    <LegalPageShell
      title="Política de privacidad"
      updatedOn={UPDATED_ON}
      updatedOnIso={UPDATED_ON_ISO}
      intro={
        <p>
          Esta política explica qué datos personales recibe el Dr. Lapo cuando
          te comunicas con él, para qué los usa y cómo puedes ejercer tus
          derechos. Se rige por la Ley Orgánica de Protección de Datos
          Personales del Ecuador (LOPDP), vigente desde 2021.
        </p>
      }
    >
      <section aria-labelledby="responsable">
        <h2 id="responsable">Responsable del tratamiento</h2>
        <p>
          El responsable de tus datos es el Dr. Fabián Edy Lapo Tandazo, que
          ejerce como Estudio Jurídico Dr. Fabián Lapo, con oficina en{" "}
          {OFFICE_LOCALITY}. Para cualquier asunto sobre tus datos puedes
          escribirle a {mailto}.
        </p>
      </section>

      <section aria-labelledby="datos">
        <h2 id="datos">Qué datos se recogen</h2>
        <p>
          Este sitio no tiene formularios ni cuentas de usuario. El Dr. Lapo
          solo recibe los datos que tú decides enviarle por WhatsApp, por
          teléfono o por correo electrónico, por ejemplo:
        </p>
        <ul>
          <li>tu nombre y tus datos de contacto (teléfono o correo);</li>
          <li>
            la descripción de tu caso y los documentos que compartas para
            analizarlo.
          </li>
        </ul>
        <p>
          Si tu consulta incluye datos sensibles (por ejemplo, de salud o
          relativos a niñas, niños y adolescentes), compártelos solo en la
          medida en que sean necesarios para tu caso.
        </p>
      </section>

      <section aria-labelledby="finalidad">
        <h2 id="finalidad">Para qué se usan</h2>
        <ul>
          <li>Responder tu consulta y evaluar tu caso.</li>
          <li>Coordinar citas y mantener la comunicación contigo.</li>
          <li>
            Si decides contratar sus servicios, prestarte la asesoría o el
            patrocinio acordado.
          </li>
        </ul>
        <p>
          Tus datos no se venden, no se ceden con fines comerciales y no se
          usan para enviarte publicidad.
        </p>
      </section>

      <section aria-labelledby="base-legal">
        <h2 id="base-legal">Base legal</h2>
        <p>
          El tratamiento se basa en tu consentimiento, que das al escribir o
          llamar, y en las medidas precontractuales que tú mismo solicitas al
          pedir una consulta. Si se formaliza una relación profesional, la base
          pasa a ser la ejecución de ese contrato y el cumplimiento de las
          obligaciones legales que se deriven de él.
        </p>
      </section>

      <section aria-labelledby="secreto">
        <h2 id="secreto">Secreto profesional</h2>
        <p>
          Todo lo que le cuentes al Dr. Lapo sobre tu caso está protegido por
          el secreto profesional que la ley impone a los abogados. Solo se
          revelará cuando una norma legal o una autoridad competente lo exija.
        </p>
      </section>

      <section aria-labelledby="conservacion">
        <h2 id="conservacion">Cuánto tiempo se conservan</h2>
        <p>
          Tus datos se conservan mientras sean necesarios para atender tu
          consulta. Si se inicia una relación profesional, se conservan
          durante esta y por los plazos que exija la ley. Después se eliminan
          o se anonimizan.
        </p>
      </section>

      <section aria-labelledby="terceros">
        <h2 id="terceros">Servicios de terceros</h2>
        <ul>
          <li>
            <strong>WhatsApp (Meta).</strong> Si escribes por WhatsApp, la
            conversación también se rige por la política de privacidad de
            WhatsApp.
          </li>
          <li>
            <strong>Google Maps.</strong> La sección de contacto muestra un
            mapa de Google. Al cargarse, Google puede recibir tu dirección IP y
            usar cookies según su propia política de privacidad.
          </li>
        </ul>
        <p>
          Aparte de estos servicios, el sitio no usa cookies de publicidad ni
          herramientas de seguimiento propias.
        </p>
      </section>

      <section aria-labelledby="derechos">
        <h2 id="derechos">Tus derechos</h2>
        <p>Según la LOPDP, puedes pedir en cualquier momento:</p>
        <ul>
          <li>
            <strong>Acceso:</strong> saber qué datos tuyos tiene el Dr. Lapo.
          </li>
          <li>
            <strong>Rectificación y actualización:</strong> corregir datos
            inexactos o desactualizados.
          </li>
          <li>
            <strong>Eliminación:</strong> que se borren tus datos cuando ya no
            sean necesarios.
          </li>
          <li>
            <strong>Oposición:</strong> que se deje de tratar tus datos para
            una finalidad concreta.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir tus datos en un formato de
            uso común.
          </li>
        </ul>
        <p>
          Para ejercerlos, escribe a {mailto} indicando tu nombre, qué derecho
          quieres ejercer y un medio para responderte. Recibirás respuesta en
          los plazos que establece la LOPDP. Si no quedas conforme, puedes
          acudir a la autoridad de protección de datos personales del Ecuador.
        </p>
      </section>

      <section aria-labelledby="cambios">
        <h2 id="cambios">Cambios en esta política</h2>
        <p>
          Si esta política cambia, la nueva versión se publicará en esta misma
          página con su fecha de actualización.
        </p>
      </section>
    </LegalPageShell>
  );
}
