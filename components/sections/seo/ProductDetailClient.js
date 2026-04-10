"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ProductDetailClient({ moldura }) {
  if (!moldura) return null;

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="product-detail-modern pt_150 pb_120">
          <div className="auto-container">
            <div className="row">
              {/* Product Image */}
              <div className="col-lg-6 col-md-12 mb-5">
                <div className="image-wrapper shadow-lg rounded-4 overflow-hidden bg-white p-4">
                  <figure className="image centred m-0">
                    <img src={moldura.imgMed} alt={moldura.title} className="img-fluid" />
                  </figure>
                </div>
              </div>

              {/* Product Info */}
              <div className="col-lg-6 col-md-12">
                <div className="product-info-box ps-lg-5">
                  <span className="brand-tag">FEGAMEX</span>
                  <h1 className="product-title mb-3">{moldura.title}</h1>
                  <p className="product-description mb-4">
                    Nuestras molduras decorativas son la opción perfecta para añadir un toque de distinción y sofisticación a tus muros y fachadas. Fabricadas con poliestireno de alta densidad, garantizan durabilidad y resistencia a la intemperie.
                  </p>

                  <div className="specs-table mb-5">
                    <h3>Especificaciones Técnicas</h3>
                    <div className="spec-row">
                      <span className="label">Altura</span>
                      <span className="value">{moldura.height} cm</span>
                    </div>
                    <div className="spec-row">
                      <span className="label">Ancho</span>
                      <span className="value">{moldura.width} cm</span>
                    </div>
                    <div className="spec-row">
                      <span className="label">Material</span>
                      <span className="value">Poliestireno de alta densidad</span>
                    </div>
                    <div className="spec-row">
                      <span className="label">Acabado</span>
                      <span className="value">Liso / Gris</span>
                    </div>
                    <div className="spec-row">
                      <span className="label">Vida Útil</span>
                      <span className="value">10+ años</span>
                    </div>
                  </div>

                  <div className="cta-box">
                    <Link
                      href={`https://wa.me/523310418179?text=Me%20interesa%20comprar%20la%20moldura%20${moldura.title}`}
                      className="theme-btn btn-whatsapp"
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      Comprar por WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="row mt-5 pt-5">
              <div className="col-12">
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="icon"><i className="flaticon-shield"></i></div>
                    <h4>Resistencia</h4>
                    <p>Mortero modificado resistente a la humedad y ambiente exterior.</p>
                  </div>
                  <div className="feature-item">
                    <div className="icon"><i className="flaticon-innovation"></i></div>
                    <h4>Diseño</h4>
                    <p>Diseño arquitectónico excepcional para destacar cualquier espacio.</p>
                  </div>
                  <div className="feature-item">
                    <div className="icon"><i className="flaticon-quality"></i></div>
                    <h4>Durabilidad</h4>
                    <p>Refuerzo de fibra de vidrio para una integridad estructural superior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .product-detail-modern {
            background-color: var(--surface-color);
          }

          .brand-tag {
            color: var(--theme-color);
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 3px;
            display: block;
            margin-bottom: 16px;
            font-family: var(--inter);
          }

          .product-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--title-color);
            line-height: 1.1;
            font-family: var(--futura);
          }

          .product-description {
            font-size: 1.1rem;
            color: var(--text-color);
            line-height: 1.7;
            font-family: var(--inter);
          }

          .specs-table {
            background: #fff;
            padding: 40px;
            border-radius: 4px;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(0,0,0,0.03);
          }

          .specs-table h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 24px;
            color: var(--title-color);
            font-family: var(--futura);
          }

          .spec-row {
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            font-family: var(--inter);
          }

          .spec-row:last-child {
            border-bottom: none;
          }

          .spec-row .label {
            color: var(--text-color);
            opacity: 0.6;
            font-weight: 500;
          }

          .spec-row .value {
            color: var(--title-color);
            font-weight: 700;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .feature-item {
            background: #fff;
            padding: 48px 32px;
            border-radius: 4px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0,0,0,0.03);
          }

          .feature-item:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(230, 57, 70, 0.1);
          }

          .feature-item .icon {
            font-size: 40px;
            color: var(--theme-color);
            margin-bottom: 24px;
          }

          .feature-item h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--title-color);
            font-family: var(--futura);
          }

          .feature-item p {
            font-size: 0.95rem;
            color: var(--text-color);
            margin: 0;
            font-family: var(--inter);
            line-height: 1.6;
          }

          .image-wrapper {
            background: #fff;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 4px;
            padding: 40px;
            box-shadow: var(--shadow-md);
          }

          @media (max-width: 991px) {
            .product-title {
              font-size: 2.75rem;
            }
            .features-grid {
              grid-template-columns: 1fr;
            }
            .product-info-box {
              padding-left: 0 !important;
              margin-top: 40px;
            }
          }

          @media (max-width: 767px) {
            .product-detail-modern {
              padding-top: 120px;
            }
            .product-title {
              font-size: 2.25rem;
            }
            .specs-table {
              padding: 30px 20px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
