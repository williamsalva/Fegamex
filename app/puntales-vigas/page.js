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
                <h1 className="title-section">Puntales y vigas</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-2 order-lg-1">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>Estilo Colonial sin Complicaciones</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Sumérgete en la elegancia del estilo colonial con
                          nuestras Vigas y Puntales, el elemento decorativo
                          perfecto para dar vida a tus ambientes con un toque de
                          autenticidad y distinción.
                        </p>
                        <p>
                          Transforma tus espacios con el encanto y la
                          sofisticación de nuestras Vigas y Puntales. Desde
                          salas de estar hasta comedores y más allá, cada viga y
                          puntal añade un toque de elegancia colonial a tu
                          hogar.
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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-1 order-lg-2">
                  <div className="image_block_two">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="/assets/images/resource/vigas-puntales.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-sm-12 order-3">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20 mb_20">
                    <li>Acabado de Madera Auténtica:</li>
                    <p>
                      Nuestras Vigas y Puntales presentan un acabado veteado y
                      antiguo que las hace tan auténticas como las de madera
                      real. Con su aspecto natural y textura detallada, añaden
                      calidez y carácter a cualquier espacio.
                    </p>
                    <li>Instalación sin Complicaciones:</li>
                    <p>
                      Instalar Vigas y Puntales nunca ha sido tan fácil.
                      Olvídate del trabajo de albañilería y terminado
                      complicado. Con nuestro sistema de instalación,
                      simplemente aplica pegamento en la cara de adherencia al
                      techo y deja que seque. ¡Es así de sencillo!
                    </p>
                    <li>Ahorro Significativo:</li>
                    <p>
                      Aunque el costo de una viga o puntal de madera puede ser
                      superior, nuestros productos de poliestireno ofrecen una
                      alternativa más económica y accesible. Además, al no
                      requerir gastos de instalación profesionales, el ahorro es
                      aún mayor. Diseñados con el concepto de "Hágalo usted
                      mismo", nuestros materiales decorativos te permiten crear
                      espacios impresionantes sin romper tu presupuesto.
                    </p>
                  </ul>

                  <p>
                    Descubre la belleza y la practicidad de nuestras Vigas y
                    Puntales y haz realidad tus sueños de diseño con facilidad y
                    estilo.
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
