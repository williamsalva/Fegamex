"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {/* about-section */}
        <section className="about-section pt_120 pb_120">
          <div className="pattern-layer rotate-me"></div>
          <div className="auto-container">
            <div className="row clearfix align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box pr_90 mr_40">
                    <div
                      className="image-shape"
                      style={{
                        backgroundImage:
                          "url(/assets/images/shape/shape-3.png)",
                      }}
                    ></div>
                    <figure className="image">
                      <img src="/assets/images/resource/nosotros.jpg" alt="" />
                    </figure>

                    <div className="experience-box">
                      <div className="inner">
                        <h2>10</h2>
                        <h6>Años de experiencia</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column ">
                <div className="content_block_one">
                  <div className="content-box ml_40">
                    <div className="sec-title mb_20">
                      <h6>Nosotros</h6>
                      <h2>Expertos en Molduras Decorativas de Alta Calidad</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p>
                        Somos expertos en la comercialización y producción de
                        molduras, destacándonos por nuestra habilidad artística
                        y artesanal. Ubicados en Zapopan, Jalisco, México, nos
                        dedicamos a realzar la belleza y valor de las
                        propiedades con elementos decorativos únicos y de alta
                        calidad. Utilizamos materiales de primera como
                        poliestireno de alta densidad y fibra de vidrio,
                        garantizando durabilidad y facilidad de instalación.
                        Ofrecemos una amplia variedad de molduras, vigas
                        rústicas y gárgolas, desde estilos clásicos hasta
                        vanguardistas. Confíe en nuestra experiencia y
                        compromiso con la excelencia artesanal para transformar
                        sus espacios.
                      </p>
                    </div>
                    {/* <div className="inner-box mb_45">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-10"></i>
                        </div>
                        <h3>Solution Focused</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec felis tincidunt feugiat
                        </p>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-11"></i>
                        </div>
                        <h3>99.99% Success</h3>
                        <p>
                          Nuestras molduras están fabricadas con los mejores
                          materiales para garantizar durabilidad y resistencia.
                        </p>
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link href="/about" className="theme-btn btn-one">
                        Discover More
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}

        {/* funfact-section */}
        {/* <section className="funfact-section about-page pt_95 pb_120">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="funfact-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-21"></i>
                  </div>
                  <div className="count-outer count-box">
                    <CounterUp end={50} />
                    <span>k+</span>
                  </div>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="funfact-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-22"></i>
                  </div>
                  <div className="count-outer count-box">
                    <CounterUp end={90} />
                    <span>Bn</span>
                  </div>
                  <p>Total Transactions</p>
                </div>
              </div>
              <div className="funfact-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-23"></i>
                  </div>
                  <div className="count-outer count-box">
                    <CounterUp end={40} />
                    <span>+</span>
                  </div>
                  <p>Branches in USA</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* funfact-section end */}

        {/* feature-style-three */}
        <section className="feature-style-three pt_120 pb_90">
          <div className="auto-container">
            <div className="sec-title mb_70 centred">
              <h2>Por qué elegirnos</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-5"></i>
                    </div>
                    <h4>
                      <Link href="/service">Calidad Superior</Link>
                    </h4>
                    <p>
                      Nuestras molduras están fabricadas con los mejores
                      materiales para garantizar durabilidad y resistencia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-6"></i>
                    </div>
                    <h4>
                      <Link href="/service">Atención al Cliente</Link>
                    </h4>
                    <p>
                      Brindamos un servicio personalizado y asesoramiento
                      experto para garantizar la satisfacción de nuestros
                      clientes en cada proyecto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-10"></i>
                    </div>
                    <h4>
                      <Link href="/service">Ahorro de Dinero</Link>
                    </h4>
                    <p>
                      Nuestros productos son de alta calidad y a precios
                      competitivos, lo que te permite embellecer tus espacios
                      sin comprometer tu presupuesto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-8"></i>
                    </div>
                    <h4>
                      <Link href="/service">Ahorro de Tiempo</Link>
                    </h4>
                    <p>
                      Con nuestras molduras de fácil instalación, te ahorrarás
                      tiempo y esfuerzo en la decoración de tus proyectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature-style-three end */}

        {/* subscribe-section */}
        <section className="subscribe-section">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}
          ></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                <div className="text-box">
                  <h2>Transforma tus Espacios Hoy Mismo</h2>
                  <p>
                    ¡Descubre nuestra colección y dale vida a tus proyectos con
                    nuestras molduras decorativas! Contáctanos vía WhatsApp para
                    obtener asesoramiento personalizado.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                <div className="form-inner ml_40">
                  <form method="post" action="contact">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                      />
                      <button type="submit" className="theme-btn btn-two">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* subscribe-section end */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
