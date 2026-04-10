"use client";
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial-section-modern">
        <div className="auto-container">
          <div className="section-header-testimonials">
            <span className="subtitle">Testimonios</span>
            <h2>Lo que dicen nuestros clientes</h2>
            <p>
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
          <div className="testimonial-content">
            <TestimonialSlider02 />
          </div>
        </div>

        <style jsx>{`
          .testimonial-section-modern {
            padding: 120px 0;
            background: var(--surface-color);
            position: relative;
            overflow: hidden;
          }

          .section-header-testimonials {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 80px;
          }

          .section-header-testimonials .subtitle {
            display: inline-block;
            color: var(--theme-color);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 24px;
            font-family: var(--inter);
          }

          .section-header-testimonials h2 {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--title-color);
            margin-bottom: 24px;
            line-height: 1.1;
            font-family: var(--futura);
          }

          .section-header-testimonials p {
            font-size: 1.15rem;
            color: var(--text-color);
            line-height: 1.6;
            font-family: var(--inter);
          }

          @media (max-width: 991px) {
            .section-header-testimonials h2 {
              font-size: 2.75rem;
            }
          }

          @media (max-width: 767px) {
            .testimonial-section-modern {
              padding: 80px 0;
            }
            .section-header-testimonials h2 {
              font-size: 2.25rem;
            }
            .section-header-testimonials {
              margin-bottom: 50px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
