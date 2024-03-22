import Layout from "@/components/layout/Layout";
import itemsMolduras from "@/data/itemsMolduras";

import Link from "next/link";

const moldura = ({ moldura }) => {
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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_two">
                    <div className="image-box">
                      <figure className="image">
                        <img src={moldura.img} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-sm-12 ">
                  <h3>Características Principales:</h3>
                  <ul className="list-style-one clearfix mt_20 mb_20">
                    <li>Material: Poliuretano</li>
                    <li>Medidas: 2.40</li>
                    <li>Color: Blanco</li>
                    <li>Acabado: Liso</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

// export const getStaticPaths = async () => {
//   console.log("Ejecutando getStaticPaths");

//   const paths = itemsMolduras.map((moldura) => {
//     return {
//       params: { itemId: String(moldura.id) },
//     };
//   });
//   console.log("Rutas generadas:", paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const moldura = itemsMolduras.find(
//     (moldura) => moldura.id === parseInt(params.itemId)
//   );

//   if (!moldura) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       moldura,
//     },
//   };
// };

export async function generateStaticParams() {
  return itemsMolduras.map((moldura) => {
    return {
      params: { itemId: String(moldura.id), moldura },
    };
  });
}

export default moldura;
