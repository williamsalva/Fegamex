"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PegamoldurasClient() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="category-modern">
          {/* Hero Section */}
          <section className="category-hero pt_150 pb_100">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-5">
                  <div className="content-box">
                    <span className="subtitle">Adhesivo de Alta Calidad</span>
                    <h1 className="title-section mb-4">Pegamolduras</h1>
                    <p className="mb-4">
                      La clave de una instalación perfecta reside en el adhesivo. Nuestro Pegamoldura está formulado específicamente para garantizar una unión fuerte y duradera entre nuestras molduras de alta densidad y cualquier tipo de superficie.
                    </p>
                    <div className="cta-box">
                      <Link
                        href="https://wa.me/523310418179?text=Me%20interesa%20comprar%20pegamolduras"
                        className="theme-btn btn-whatsapp"
                      >
                        <i className="fab fa-whatsapp me-2"></i>
                        Comprar por WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="image-wrapper shadow-lg rounded-4 overflow-hidden bg-white p-4">
                    <img
                      src="/assets/images/resource/pegamoldura.png"
                      alt="Pegamolduras Fegamex"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="category-features pb_120 pt_50">
            <div className="auto-container">
              <div className="sec-title centred mb_70">
                <h2>Rendimiento Profesional</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="icon"><i className="flaticon-quality"></i></div>
                    <h3>Máxima Adherencia</h3>
                    <p>Fórmula avanzada que evita el deslizamiento durante la instalación y asegura un agarre inmediato.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="feature-card highlighted">
                    <div className="icon"><i className="flaticon-design"></i></div>
                    <h3>Acabado Limpio</h3>
                    <p>Fácil de aplicar y limpiar, permitiendo acabados profesionales sin dejar manchas ni residuos difíciles de quitar.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="icon"><i className="flaticon-innovation"></i></div>
                    <h3>Rendimiento Superior</h3>
                    <p>Presentaciones diseñadas para cubrir grandes longitudes de moldura, optimizando el costo por metro instalado.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="category-cta pb_120 pt_50">
            <div className="auto-container">
              <div className="cta-inner text-center p-5 rounded-4 shadow-lg">
                <h2 className="mb-3">El complemento esencial para tu proyecto</h2>
                <p className="mb-4">Asegura la longevidad de tu decoración con el adhesivo líder en el mercado.</p>
                <Link href="/contact" className="theme-btn btn-one">Solicitar Cotización</Link>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .category-modern {
            background-color: var(--surface-color);
          }

          .category-hero {
            padding-top: 150px;
            padding-bottom: 100px;
            background: #fff;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }

          .category-hero .subtitle {
            display: inline-block;
            color: var(--theme-color);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 24px;
            font-family: var(--inter);
          }

          .category-hero h1 {
            font-size: 4rem;
            font-weight: 800;
            color: var(--title-color);
            line-height: 1.1;
            font-family: var(--futura);
          }

          .category-hero p {
            font-size: 1.15rem;
            color: var(--text-color);
            line-height: 1.6;
            font-family: var(--inter);
          }

          .image-wrapper {
            background: #f8fafc;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 4px;
            padding: 40px;
            box-shadow: var(--shadow-md);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .image-wrapper:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-lg);
          }

          .sec-title h2 {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--title-color);
            font-family: var(--futura);
          }

          .feature-card {
            background: #fff;
            padding: 48px 32px;
            border-radius: 4px;
            height: 100%;
            box-shadow: var(--shadow-sm);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0,0,0,0.03);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(230, 57, 70, 0.1);
          }

          .feature-card.highlighted {
            border-top: 3px solid var(--theme-color);
          }

          .feature-card .icon {
            font-size: 40px;
            color: var(--theme-color);
            margin-bottom: 24px;
          }

          .feature-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--title-color);
            font-family: var(--futura);
          }

          .feature-card p {
            font-size: 0.95rem;
            color: var(--text-color);
            margin: 0;
            font-family: var(--inter);
            line-height: 1.6;
          }

          .cta-inner {
            background: var(--secondary-color);
            color: white;
            padding: 80px 60px;
            border-radius: 4px;
            box-shadow: var(--shadow-lg);
          }

          .cta-inner h2 {
            color: white;
            font-weight: 800;
            font-size: 2.5rem;
            font-family: var(--futura);
          }

          .cta-inner p {
            color: rgba(255,255,255,0.7);
            font-size: 1.1rem;
            font-family: var(--inter);
          }

          @media (max-width: 1199px) {
            .category-hero h1 {
              font-size: 3rem;
            }
          }

          @media (max-width: 991px) {
            .category-hero {
              text-align: center;
              padding-top: 120px;
            }
            .category-hero h1 {
              font-size: 2.75rem;
            }
            .content-box {
              margin-bottom: 50px;
            }
          }

          @media (max-width: 767px) {
            .category-hero h1 {
              font-size: 2.25rem;
            }
            .sec-title h2 {
              font-size: 2rem;
            }
            .cta-inner {
              padding: 60px 30px;
            }
            .cta-inner h2 {
              font-size: 2rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
