"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    1199: { slidesPerView: 2 },
  },
};

const testimonials = [
  {
    name: "Ricardo Mendoza",
    role: "Arquitecto",
    text: "La calidad de las molduras Fegamex es impresionante. Son fáciles de instalar y el acabado final es indistinguible de materiales mucho más caros.",
  },
  {
    name: "Elena Torres",
    role: "Diseñadora de Interiores",
    text: "Utilizamos las vigas rústicas en un proyecto residencial y el cliente quedó encantado. Le dieron un toque colonial auténtico en cuestión de horas.",
  },
  {
    name: "Carlos Sánchez",
    role: "Contratista",
    text: "El pegamoldura es por mucho el mejor adhesivo que he usado. Seca rápido y la fijación es extremadamente sólida. Recomendado al 100%.",
  },
  {
    name: "Sofía Martínez",
    role: "Propietaria",
    text: "Me fascinaron los rosetones. Cambiaron por completo la vista de mi sala. El proceso de compra por WhatsApp fue muy ágil y profesional.",
  }
];

export default function TestimonialSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel">
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="testimonial-block-two">
              <div className="inner-box">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">“{item.text}”</p>
                <div className="author-box">
                  <div className="author-info">
                    <h4>{item.name}</h4>
                    <span className="designation">{item.role}</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .testimonial-block-two {
          height: 100%;
          padding: 10px;
        }

        .inner-box {
          background: #fff;
          padding: 40px;
          border-radius: 4px;
          height: 100%;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .inner-box:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(230, 57, 70, 0.1);
        }

        .quote-icon {
          font-size: 32px;
          color: var(--theme-color);
          opacity: 0.2;
          margin-bottom: 24px;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-color);
          font-style: italic;
          margin-bottom: 32px;
          font-family: var(--inter);
        }

        .author-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 24px;
        }

        .author-info h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--title-color);
          margin: 0;
          font-family: var(--futura);
        }

        .designation {
          font-size: 13px;
          color: var(--theme-color);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--inter);
        }

        .rating {
          color: #ffb400;
          font-size: 12px;
          display: flex;
          gap: 2px;
        }

        @media (max-width: 767px) {
          .inner-box {
            padding: 30px;
          }
          .testimonial-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

