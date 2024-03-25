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
                <h1 className="title-section">Rosetones</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-2 order-lg-1">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>Elegancia y Estilo para tus Espacios</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Explora nuestra exclusiva colección de rosetones,
                          elaborados con formas y relieves de alta calidad en
                          Poliuretano y Poliestireno. Nuestra selección de
                          piezas decorativas para techos y paredes ofrece una
                          alternativa excepcional para realzar cualquier
                          entorno.
                        </p>
                        <p>
                          Descubre la diferencia que hacen los rosetones de alta
                          calidad en la decoración de tus espacios. Únete a la
                          excelencia en diseño y calidad con nuestros rosetones,
                          diseñados para elevar tus ambientes a nuevas alturas
                          de elegancia y distinción.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="https://wa.me/523310418179?text=Me%20interesa%20comprar%20rosetones"
                          className="bnt-WhatsApp-sales"
                        >
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
                          src="/assets/images/resource/rosetones.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-sm-12 order-3">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20 mb_20">
                    <li>Variedad de Diseños:</li>
                    <p>
                      Los rosetones son el complemento perfecto para cualquier
                      decoración. Nuestra colección incluye una variedad de
                      estilos, desde gótico hasta moderno, para adaptarse a tus
                      preferencias y necesidades de diseño.
                    </p>
                    <li>Calidad Inigualable:</li>
                    <p>
                      Fabricados en Poliuretano rígido, nuestros rosetones
                      ofrecen una durabilidad excepcional y una definición de
                      detalles incomparable. Resistentes a golpes y con una
                      calidad visual que perdura, cada rosetón es una obra
                      maestra de artesanía y elegancia.
                    </p>
                    <li>Versatilidad en la Instalación:</li>
                    <p>
                      Ya sea para decorar techos o embellecer paredes, nuestros
                      rosetones se adaptan perfectamente a cualquier espacio. Su
                      versatilidad de instalación permite una integración sin
                      esfuerzo en una amplia gama de diseños arquitectónicos.
                    </p>
                  </ul>

                  <p>
                    Transforma tus espacios con la belleza y el encanto de
                    nuestros rosetones. Desde la sala de estar hasta el salón de
                    eventos, cada rosetón añade un toque de sofisticación y
                    estilo único a tu entorno.
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
