"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
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
        <div
          className="shape"
          style={{ backgroundImage: "url(/assets/images/shape/shape-19.png)" }}
        ></div>
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
              <div className="row clearfix justify-content-between">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="content-box">
                    <h2>Molduras Decorativas</h2>
                    <p>
                      Transforma tus Espacios con Nuestras Molduras Exclusivas
                    </p>
                    <div className="btn-box">
                      <Link href="/" className="theme-btn btn-three">
                        ¡Conocelas!
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="image-box">
                    <div className="image-shape">
                      <figure
                        className="image wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1800ms"
                      >
                        <img src="/assets/images/banner/moldura.png" alt="" />
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
                    <h2>Gárgolas Bajantes de Agua</h2>
                    <p>
                      Utiles para decorar fachadas y canalizar la salida de agua
                    </p>
                    <div className="btn-box">
                      <Link href="/" className="theme-btn btn-three">
                        ¡Conocelas!
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
                        <img src="/assets/images/banner/gargola.png" alt="" />
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
                    <h2>Vigas y Puntales Decorativos</h2>
                    <p>Encuentra la Armonía en Nuestras Vigas y Puntales</p>
                    <div className="btn-box">
                      <Link href="/" className="theme-btn btn-three">
                        Ver Más
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
                        <img src="/assets/images/banner/puntales.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="owl-nav">
            <button type="button" className="owl-prev h1p">
              <span className="icon-5"></span>
            </button>
            <button type="button" className="owl-next h1n">
              <span className="icon-6"></span>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
}
