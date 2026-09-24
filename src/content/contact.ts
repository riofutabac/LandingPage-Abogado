export const FOUNDING_YEAR = 2017;

export const PHONE_E164 = "+593990728407";
export const PHONE_DISPLAY = "099 072 8407";
export const EMAIL = "estudiojuridicoflapo@hotmail.com";

export const OFFICE_HOURS = "Según disponibilidad, con cita previa";
export const OFFICE_LOCALITY = "Santo Domingo de los Tsáchilas, Ecuador";
export const OFFICE_STREET = "Cocaniguas, Yaguarcocha";
export const OFFICE_POSTAL_CODE = "230107";
export const OFFICE_ADDRESS = `${OFFICE_STREET}, Santo Domingo ${OFFICE_POSTAL_CODE}`;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Estudio+Jur%C3%ADdico+Fabian+Lapo+Santo+Domingo";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.779914679728!2d-79.16719979999999!3d-0.25139639999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54771c507744f%3A0xdfac05293db2fb7c!2sEstudio%20Jur%C3%ADdico%20Fabian%20Lapo!5e0!3m2!1ses-419!2sec!4v1790287796984!5m2!1ses-419!2sec";
export const OFFICE_GEO = { latitude: -0.2513964, longitude: -79.1671998 };

const WHATSAPP_NUMBER = "593990728407";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Dr. Lapo, quisiera una consulta sobre mi caso.";

/** Builds a wa.me link with a prefilled, URL-encoded message. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function yearsSinceFounding(now: Date = new Date()): number {
  return now.getFullYear() - FOUNDING_YEAR;
}
