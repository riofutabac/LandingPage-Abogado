import { testimonials, type Testimonial } from "@/content/testimonials";

const SOURCE_LABELS: Record<NonNullable<Testimonial["source"]>, string | null> = {
  google: "Reseña de Google",
  directo: null,
};

function TestimonialQuote({ testimonial }: { testimonial: Testimonial }) {
  const sourceLabel = testimonial.source ? SOURCE_LABELS[testimonial.source] : null;
  const meta = [testimonial.caseType, sourceLabel].filter(Boolean).join(" · ");

  return (
    <figure className="reveal testimonial">
      <blockquote className="font-serif testimonial-quote">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="testimonial-caption">
        <span className="testimonial-author">{testimonial.author}</span>
        {meta && <span className="testimonial-meta">{meta}</span>}
      </figcaption>
    </figure>
  );
}

/** Renders nothing until real, authorized testimonials exist in content. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  const isSingle = testimonials.length === 1;

  return (
    <section
      id="testimonios"
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials-inner">
        <h2 id="testimonials-title" className="reveal font-serif section-title testimonials-title">
          Lo que dicen los clientes del Dr. Lapo
        </h2>
        <div className={`testimonials-list${isSingle ? " testimonials-list--single" : ""}`}>
          {testimonials.map((testimonial) => (
            <TestimonialQuote
              key={`${testimonial.author}-${testimonial.quote.slice(0, 24)}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
