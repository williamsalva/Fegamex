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
                <h1 className="title-section">Pegamolduras</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>Para sus proyectos más desafiantes.</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Pegamolduras Fegamex es un adhesivo de alta calidad
                          diseñado para la instalación de molduras de
                          poliestireno en interiores y exteriores. Con una
                          fórmula especializada, este adhesivo ofrece una
                          adherencia superior en una amplia gama de superficies,
                          asegurando que tus molduras se mantengan en su lugar
                          de forma segura y duradera.
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
                      <figure className="image">
                        <img
                          src="/assets/images/resource/pegamoldura.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-sm-12 ">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20">
                    <li>Especializado para Molduras de Poliestireno:</li>
                    <p>
                      Diseñado específicamente para las exigencias de las
                      molduras de poliestireno, Pegamolduras Fegamex ofrece una
                      adherencia incomparable, asegurando que tus molduras se
                      mantengan en su lugar de forma segura y duradera.
                    </p>
                    <li>Alta Adherencia en Diversas Superficies:</li>
                    <p>
                      Desde concreto hasta vidrio, Pegamolduras Fegamex ofrece
                      una adherencia confiable en una amplia gama de
                      superficies, asegurando resultados consistentes en
                      cualquier entorno.
                    </p>
                    <li>Listo para Usarse, Sin Necesidad de Agua:</li>
                    <p>
                      Pegamolduras Fegamex viene listo para usarse, sin
                      necesidad de mezclar con agua u otros líquidos. Esto
                      garantiza una aplicación rápida y sencilla, sin
                      complicaciones ni desorden.
                    </p>
                  </ul>

                  <p>
                    Ya sea que estés renovando un espacio comercial,
                    embelleciendo tu hogar o trabajando en un proyecto de
                    construcción a gran escala, Pegamolduras Fegamex es la
                    opción ideal para tus necesidades de instalación de
                    molduras.
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
