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
                <h6>Instrucciones</h6>
                <h2> Instrucciones de uso para aplicación de Pegamolduras</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="instructions-container">
                    <div
                      className="step wow fadeInUp animated"
                      data-wow-delay="00ms"
                    >
                      <div className="step-circle">1</div>
                      <div className="step-content">
                        <h3>Preparación de la superficie</h3>
                        <p>
                          Antes de comenzar, asegúrese de que al superficie este
                          completamente libre de grasa y polvo. No se debe
                          añadir agua ni otro líquido en ningún momento.
                        </p>
                      </div>
                    </div>
                    <div
                      className="step wow fadeInUp animated"
                      data-wow-delay="200ms"
                    >
                      <div className="step-circle">2</div>
                      <div className="step-content">
                        <h3>Medición y preparación del adhesivo</h3>
                        <p>
                          Determine el ancho adecuado para la aplicación del
                          adhesivo, puede variar entre 2cm y 6cm dependiendo del
                          tamaño de la moldura. El espesor recomendado del
                          adhesivo es de 3mm.
                        </p>
                      </div>
                    </div>
                    <div
                      className="step wow fadeInUp animated"
                      data-wow-delay="400ms "
                    >
                      <div className="step-circle">3</div>
                      <div className="step-content">
                        <h3>Colocación y fijación de la moldura</h3>
                        <p>
                          Presione firmemente la moldura contra la pared donde
                          desea colocarla. Para una fijación óptima, se
                          recomienda clavar la parte inferior de la moldura
                          inmediatamente después de su colocación para asegurar
                          una unión sólida.
                        </p>
                      </div>
                    </div>
                    <div
                      className="step wow fadeInUp animated"
                      data-wow-delay="600ms"
                    >
                      <div className="step-circle">4</div>
                      <div className="step-content">
                        <h3>Eliminación de excedente de adhesivo</h3>
                        <p>
                          Después de la instalación, retire cualquier excedente
                          de adhesivo utilizando una herramienta adecuada. Tenga
                          en cuenta que el adhesivo puede endurecerse
                          rápidamente, así que elimine el excedente mientras
                          este aún húmedo.
                        </p>
                      </div>
                    </div>
                    <div
                      className="step wow fadeInUp animated"
                      data-wow-delay="800ms"
                    >
                      <div className="step-circle">5</div>
                      <div className="step-content">
                        <h3>Tiempo de secado y manipulación</h3>
                        <p>
                          Evite mover las molduras durante las siguientes 24
                          horas para permitir que el adhesivo se fije
                          completamente. Este período de secado es importante
                          para asegurar una adhesión sólida y duradera.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_two">
                    <div className="image-box">
                      <div className="image-shape">
                        <div
                          className="shape-3"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-11.png)",
                          }}
                        ></div>
                        <div
                          className="shape-4"
                          style={{
                            backgroundImage:
                              "url(/assets/images/shape/shape-3.png)",
                          }}
                        ></div>
                      </div>
                      <figure className="image">
                        <img
                          src="/assets/images/resource/habitacion.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
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
