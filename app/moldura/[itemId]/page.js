import Layout from "@/components/layout/Layout";
import itemsMolduras from "@/data/itemsMolduras";

import Link from "next/link";

export async function generateStaticParams() {
  return itemsMolduras.map((moldura) => {
    return {
      params: {
        itemId: String(moldura.id),
      },
    };
  });
}

const moldura = ({ params }) => {
  const moldura = itemsMolduras.find(
    (moldura) => moldura.id === parseInt(params.itemId)
  );

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="feature-style-three pb_90 pt_120">
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h1 className="title-section">{moldura.title}</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-2 order-lg-1">
                  <div className="content_block_three">
                    <div className="content-box mr_110">
                      <div className="sec-title mb_20">
                        <h2>Elegancia y estilo para tus muros y fachadas</h2>
                      </div>
                      <div className="text-box mb_40">
                        <p>
                          Nuestras molduras decorativas son la opción perfecta
                          para añadir un toque de distinción y sofisticación a
                          tus muros y fachadas. Fabricadas con poliestireno de
                          alta densidad, estas molduras son excepcionalmente
                          duraderas y resistentes a la intemperie, garantizando
                          una belleza perdurable en cualquier entorno.
                        </p>
                        <p>
                          Descubre la diferencia que pueden hacer nuestras
                          molduras decorativas en tus proyectos de diseño y
                          decoración. Añade un toque de elegancia y estilo a tus
                          espacios con nuestras molduras, diseñadas para superar
                          tus expectativas más exigentes.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href={`https://wa.me/5214423598154?text=Me%20interesa%20comprar%20la%20moldura%20${moldura.title}`}
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
                        <img src={moldura.imgMed} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 order-3">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20 mb_20">
                    <li>Diseño arquitectónico excepcional:</li>
                    <p>
                      Diseñadas para destacar y embellecer, nuestras molduras
                      decorativas son el complemento ideal para cualquier
                      proyecto arquitectónico. Ya sea en interiores o
                      exteriores, estas molduras añaden un toque peculiar
                      a tus espacios.
                    </p>
                    <li>Resistencia sin compromisos:</li>
                    <p>
                      Fabricadas con poliuretano de alta densidad y recubiertas
                      con mortero modificado resistente a la humedad y al
                      ambiente exterior, nuestras molduras son capaces de
                      resistir las condiciones más adversas sin perder su
                      belleza ni su integridad estructural.
                    </p>
                    <li>Durabilidad Reforzada con Fibra de Vidrio:</li>
                    <p>
                      Únicas en su clase, nuestras molduras cuentan con un
                      refuerzo de fibra de vidrio para una durabilidad y
                      resistencia aún mayores. Este refuerzo garantiza que tus
                      molduras mantengan su belleza y forma original durante
                      años.
                    </p>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb_20 order-4">
                  <div className="box-characteristics">
                    <h3>Especificaciones Técnicas:</h3>
                    <div className="row-characteristics mt_10">
                      <li>Altura:</li>
                      <p className="ml_10">{moldura.height} cm</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Ancho</li>
                      <p className="ml_10">{moldura.width} cm</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Color:</li>
                      <p className="ml_10">Gris</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Acabado:</li>
                      <p className="ml_10">Liso</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Material:</li>
                      <p className="ml_10">Poliestireno</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Tiempo de vida:</li>
                      <p className="ml_10">10 años</p>
                    </div>
                    <div className="row-characteristics">
                      <li>Instalación:</li>
                      <p className="ml_10">Fácil</p>
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
};

export default moldura;
