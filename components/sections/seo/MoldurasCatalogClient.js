"use client";
import Layout from "@/components/layout/Layout";
import ItemMolduras from "@/components/elements/ItemMolduras";
import itemsMolduras from "@/data/itemsMolduras";

export default function MoldurasCatalogClient() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="catalog-modern">
          {/* Hero Section */}
          <section className="catalog-hero pt_150 pb_100">
            <div className="auto-container">
              <div className="content-box centred">
                <span className="subtitle">Nuestra Colección</span>
                <h1 className="title-section">Molduras Decorativas</h1>
                <p>Descubre nuestra amplia gama de molduras de alta densidad para embellecer tus espacios.</p>
              </div>
            </div>
          </section>

          {/* Grid Section */}
          <section className="catalog-grid pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                {itemsMolduras.map((item, index) => (
                  <ItemMolduras
                    key={index}
                    title={item.title}
                    img={item.img}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* subscribe-section */}
          <section className="subscribe-section-modern pb_100">
            <div className="auto-container">
              <div className="subscribe-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                    <div className="text-box">
                      <h2>Mantente al tanto de nuestras novedades</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <div className="form-inner">
                      <form method="post" action="/contact">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            required
                          />
                          <button type="submit" className="theme-btn btn-two">
                            Suscribirse
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .catalog-modern {
            background-color: var(--surface-color);
          }
          
          .catalog-hero {
            background-color: #fff;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }
          
          .catalog-hero .subtitle {
            display: inline-block;
            color: var(--theme-color);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 24px;
            font-family: var(--inter);
          }
          
          .catalog-hero h1 {
            font-size: 4rem;
            font-weight: 800;
            color: var(--title-color);
            margin-bottom: 24px;
            line-height: 1.1;
            font-family: var(--futura);
          }
          
          .catalog-hero p {
            font-size: 1.25rem;
            color: var(--text-color);
            max-width: 700px;
            margin: 0 auto;
            font-family: var(--inter);
            line-height: 1.6;
          }
          
          .subscribe-section-modern {
            padding-top: 50px;
          }

          .subscribe-inner {
            background: var(--secondary-color);
            border-radius: 4px;
            padding: 80px 60px;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
          }
          
          .subscribe-inner h2 {
            color: #fff;
            margin: 0;
            font-size: 2.25rem;
            font-weight: 800;
            line-height: 1.2;
            font-family: var(--futura);
          }
          
          .subscribe-inner .form-group {
            position: relative;
            display: flex;
            gap: 16px;
          }
          
          .subscribe-inner input {
            flex-grow: 1;
            height: 60px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 4px;
            padding: 0 24px;
            color: #fff;
            outline: none;
            transition: all 0.4s ease;
            font-family: var(--inter);
            font-size: 1rem;
          }
          
          .subscribe-inner input:focus {
            border-color: var(--theme-color);
            background: rgba(255,255,255,0.1);
          }

          .btn-two {
            background: var(--theme-color);
            color: #fff;
            padding: 16px 32px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.4s ease;
            border: none;
          }

          .btn-two:hover {
            background: #ff4d5a;
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
          }
          
          @media (max-width: 991px) {
            .catalog-hero h1 {
              font-size: 3rem;
            }
            .subscribe-inner {
              padding: 60px 40px;
              text-align: center;
            }
            .subscribe-inner .text-column {
              margin-bottom: 40px;
            }
            .subscribe-inner .form-group {
              flex-direction: column;
            }
          }
          
          @media (max-width: 767px) {
            .catalog-hero {
              padding: 120px 0 80px;
            }
            .catalog-hero h1 {
              font-size: 2.25rem;
            }
            .catalog-hero p {
              font-size: 1.1rem;
            }
            .subscribe-inner h2 {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
