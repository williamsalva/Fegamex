"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      <section className="banner-style-three p_relative">
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/banner/banner-7.jpg)",
              }}
            ></div>
            <div className="pattern-layer"></div>
            <div className="auto-container">
              <div className="row clearfix justify-content-between orderRow">
                <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                  <div className="content-box">
                    <span className="badge-tag">Calidad Premium</span>
                    <h2>Molduras Decorativas</h2>
                    <p>
                      Transforma tus espacios con elegancia y distincion. Molduras de alta calidad para interiores y exteriores.
                    </p>
                    <div className="btn-box">
                      <Link href="/molduras-decorativas" className="theme-btn btn-three">
                        Explorar Catalogo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                  <div className="image-box">
                    <div className="image-shape">
                      <figure
                        className="image wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1800ms"
                      >
                        <img src="/assets/images/banner/moldura.png" alt="Moldura decorativa de alta calidad" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/banner/banner-8.jpg)",
              }}
            ></div>

            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="content-box">
                    <span className="badge-tag">Funcionalidad + Estilo</span>
                    <h2>Gargolas Decorativas</h2>
                    <p>
                      Combina funcionalidad y estetica. Perfectas para canalizar agua y embellecer fachadas.
                    </p>
                    <div className="btn-box">
                      <Link href="/gargolas" className="theme-btn btn-three">
                        Ver Coleccion
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="image-box">
                    <div className="image-shape">
                      <figure
                        className="image fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <img src="/assets/images/banner/gargola.png" alt="Gargola bajante decorativa" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(/assets/images/banner/banner-9.jpg)",
              }}
            ></div>

            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="content-box">
                    <span className="badge-tag">Estilo Colonial</span>
                    <h2>Vigas y Puntales</h2>
                    <p>Crea ambientes unicos con nuestras vigas y puntales decorativos de estilo colonial.</p>
                    <div className="btn-box">
                      <Link href="/puntales-vigas" className="theme-btn btn-three">
                        Descubrir Mas
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="image-box">
                    <div className="image-shape">
                      <figure
                        className="image fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <img src="/assets/images/banner/puntales.png" alt="Vigas y puntales decorativos" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <style jsx>{`
        .badge-tag {
          display: inline-block;
          background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
          color: #fff;
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 30px;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}
