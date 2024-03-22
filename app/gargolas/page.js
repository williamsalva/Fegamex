import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="feature-style-three pb_90 pt_120">
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h1 className="title-section">Gárgolas</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>
                          Funcionalidad y Estética para tus Espacios Exteriores
                        </h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Las Gárgolas no solo embellecen fachadas, sino que
                          también desempeñan un papel crucial en la canalización
                          del agua en techos y terrazas, agregando un toque de
                          carácter y funcionalidad a tu entorno exterior.
                        </p>
                        <p>
                          TNuestras Gárgolas son compatibles con una variedad de
                          superficies, incluyendo cemento, estuco, tablaroca,
                          concreto precolado y tilt-up, lo que las convierte en
                          la elección ideal para una amplia gama de proyectos
                          arquitectónicos
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link href="/about" className="bnt-WhatsApp-sales">
                          <i className="fab fa-whatsapp my-whatsapp-icon-sales"></i>
                          Comprar por WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_two">
                    <div className="image-box">
                      <h2>Gárgola colonial</h2>
                      <figure className="image">
                        <img
                          src="/assets/images/resource/gargola-colonial.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="image_block_two">
                    <div className="image-box">
                      <h2>Gárgola californiana</h2>
                      <figure className="image">
                        <img
                          src="/assets/images/resource/gargola-californiana.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-sm-12 ">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20 mb_20">
                    <li>Decoración y Funcionalidad Integradas:</li>
                    <p>
                      Diseñadas para embellecer y canalizar, nuestras Gárgolas
                      son el complemento perfecto para cualquier fachada.
                      Canalizan la salida de agua de manera eficiente mientras
                      agregan un elemento distintivo a la estética de tu hogar.
                    </p>
                    <li>Personalización sin Límites:</li>
                    <p>
                      Con la posibilidad de pintarse en cualquier color,
                      nuestras Gárgolas se adaptan perfectamente a cualquier
                      entorno. Desde tonos neutros hasta colores vibrantes,
                      puedes personalizarlas para que se integren armoniosamente
                      con tu diseño exterior.
                    </p>
                    <li>Durabilidad y Facilidad de Mantenimiento:</li>
                    <p>
                      Fabricadas en poliestireno recubierto con mortero
                      modificado, nuestras Gárgolas son resistentes a la humedad
                      y al ambiente exterior. Además, su ligereza las hace
                      fáciles de instalar y limpiar, garantizando una larga vida
                      útil con poco esfuerzo.
                    </p>
                  </ul>

                  <p>
                    Transforma tus espacios exteriores con la belleza y la
                    funcionalidad de nuestras Gárgolas. Desde residencias hasta
                    espacios comerciales, cada Gárgola agrega un toque de
                    carácter y distinción a tu entorno.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="feature-style-three pt_90 pb_90">
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
        </div>
      </Layout>
    </>
  );
}
