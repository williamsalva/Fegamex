"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function NosotrosClient() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {/* about-section */}
        <section className="about-section-modern pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_modern">
                  <div className="image-box-modern">
                    <figure className="image">
                      <img src="/assets/images/resource/nosotros.jpg" alt="Equipo de Fegamex - Molduras decorativas" />
                    </figure>
                    <div className="experience-box-modern">
                      <div className="experience-content">
                        <div className="exp-number">10+</div>
                        <div className="exp-text">Años de experiencia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box-modern">
                  <span className="subtitle-badge">Conoce a Fegamex</span>
                  <h2 className="main-title">Expertos en Molduras Decorativas</h2>
                  <p className="intro-text">
                    Somos expertos en la comercializacion y produccion de molduras, destacandonos por nuestra habilidad artistica y artesanal. Ubicados en Zapopan, Jalisco, Mexico.
                  </p>
                  
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Materiales de Primera Calidad</h4>
                        <p>Poliestireno de alta densidad y fibra de vidrio para maxima durabilidad.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-hammer"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Facilidad de Instalacion</h4>
                        <p>Productos listos para instalar con instrucciones claras y sencillas.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-palette"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Variedad de Estilos</h4>
                        <p>Desde clasicos hasta vanguardistas, molduras para cada gusto.</p>
                      </div>
                    </div>
                  </div>

                  <p className="closing-text">
                    Confie en nuestra experiencia y compromiso con la excelencia artesanal para transformar sus espacios en lugares unicos y hermosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}

        {/* feature-style-three */}
        <section className="why-choose-us-modern">
          <div className="auto-container">
            <div className="section-header-why">
              <span className="subtitle">Nuestros Valores</span>
              <h2>Por que Elegirnos</h2>
              <p>Descubre lo que nos diferencia en el mercado de molduras decorativas</p>
            </div>
            
            <div className="features-grid-modern">
              <div className="feature-card-modern wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1000ms">
                <div className="feature-icon-modern quality">
                  <i className="fas fa-crown"></i>
                </div>
                <h4>Calidad Superior</h4>
                <p>
                  Molduras fabricadas con los mejores materiales para garantizar durabilidad y resistencia excepcional en el tiempo.
                </p>
              </div>

              <div className="feature-card-modern wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1000ms">
                <div className="feature-icon-modern service">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>Atencion al Cliente</h4>
                <p>
                  Servicio personalizado y asesoramiento experto para garantizar la satisfaccion total en cada proyecto.
                </p>
              </div>

              <div className="feature-card-modern wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1000ms">
                <div className="feature-icon-modern price">
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h4>Precios Competitivos</h4>
                <p>
                  Productos de alta calidad a precios accesibles, permitiendote embellecer tus espacios sin compromiso presupuestario.
                </p>
              </div>

              <div className="feature-card-modern wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div className="feature-icon-modern time">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Facil Instalacion</h4>
                <p>
                  Molduras de instalacion sencilla con instrucciones claras, ahorrando tiempo y esfuerzo en tus proyectos.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* feature-style-three end */}

        {/* cta-section */}
        <section className="cta-section-nosotros">
          <div className="auto-container">
            <div className="cta-wrapper-nosotros">
              <div className="cta-content-nosotros">
                <span className="cta-badge">Contactanos Ahora</span>
                <h2>Transforma tus Espacios Hoy Mismo</h2>
                <p>
                  Descubre nuestra coleccion completa y dale vida a tus proyectos con 
                  molduras decorativas de la mas alta calidad. Nuestro equipo esta listo 
                  para asesorarte personalizadamente.
                </p>
              </div>
              <div className="cta-action-nosotros">
                <div className="whatsapp-card-nosotros">
                  <div className="whatsapp-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h3>Escribenos por WhatsApp</h3>
                  <p>Respuesta inmediata de lunes a sabado</p>
                  <Link
                    href="https://wa.me/523310418179?text=Hola%20FEGAMEX%20quiero%20más%20información%20sobre%20sus%20productos%20de%20molduras%20decorativas"
                    className="whatsapp-btn"
                  >
                    Iniciar Conversacion
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cta-section end */}

        <style jsx>{`
          .about-section-modern {
            padding: 120px 0;
            background: var(--surface-color);
          }
          .image-box-modern {
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
          }
          .image-box-modern img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .image-box-modern:hover img {
            transform: scale(1.05);
          }
          .experience-box-modern {
            position: absolute;
            bottom: 30px;
            left: 30px;
            background: var(--theme-color);
            padding: 24px;
            border-radius: 4px;
            box-shadow: var(--shadow-md);
          }
          .experience-content {
            color: #fff;
            text-align: center;
          }
          .exp-number {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1;
            margin-bottom: 4px;
            font-family: var(--futura);
          }
          .exp-text {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: var(--inter);
          }
          .content-box-modern {
            padding-left: 60px;
          }
          .subtitle-badge {
            display: inline-block;
            background: rgba(230, 57, 70, 0.1);
            color: var(--theme-color);
            padding: 6px 16px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-radius: 4px;
            margin-bottom: 24px;
            font-family: var(--inter);
          }
          .main-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--title-color);
            margin-bottom: 24px;
            line-height: 1.1;
            font-family: var(--futura);
          }
          .intro-text {
            font-size: 1.15rem;
            color: var(--text-color);
            line-height: 1.6;
            margin-bottom: 40px;
            font-family: var(--inter);
          }
          .features-list {
            display: flex;
            flex-direction: column;
            gap: 32px;
            margin-bottom: 40px;
          }
          .feature-item {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }
          .feature-icon {
            width: 48px;
            height: 48px;
            background: #f8fafc;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 20px;
            color: var(--theme-color);
            box-shadow: var(--shadow-sm);
          }
          .feature-content h4 {
            font-size: 18px;
            font-weight: 700;
            color: var(--title-color);
            margin: 0 0 8px 0;
            font-family: var(--futura);
          }
          .feature-content p {
            font-size: 0.95rem;
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            font-family: var(--inter);
          }
          .closing-text {
            font-size: 1.1rem;
            color: var(--text-color);
            line-height: 1.6;
            font-weight: 500;
            font-family: var(--inter);
            border-left: 2px solid var(--theme-color);
            padding-left: 24px;
          }
          .why-choose-us-modern {
            padding: 120px 0;
            background: #fff;
          }
          .section-header-why {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 80px;
          }
          .section-header-why .subtitle {
            display: inline-block;
            color: var(--theme-color);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 20px;
            font-family: var(--inter);
          }
          .section-header-why h2 {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--title-color);
            margin-bottom: 24px;
            line-height: 1.1;
            font-family: var(--futura);
          }
          .section-header-why p {
            font-size: 1.15rem;
            color: var(--text-color);
            line-height: 1.6;
            font-family: var(--inter);
          }
          .features-grid-modern {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }
          .feature-card-modern {
            background: #fff;
            padding: 48px 32px;
            border-radius: 4px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(0,0,0,0.03);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .feature-card-modern:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(230, 57, 70, 0.1);
          }
          .feature-icon-modern {
            width: 60px;
            height: 60px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            font-size: 28px;
            color: #fff;
            transition: all 0.4s ease;
          }
          .feature-icon-modern.quality {
            background: var(--theme-color);
          }
          .feature-icon-modern.service {
            background: var(--secondary-color);
          }
          .feature-icon-modern.price {
            background: #16a34a;
          }
          .feature-icon-modern.time {
            background: #ea580c;
          }
          .feature-card-modern h4 {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--title-color);
            margin-bottom: 16px;
            font-family: var(--futura);
          }
          .feature-card-modern p {
            font-size: 0.95rem;
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            font-family: var(--inter);
          }
          .cta-section-nosotros {
            padding: 120px 0;
            background: var(--secondary-color);
            position: relative;
            overflow: hidden;
          }
          .cta-wrapper-nosotros {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
            align-items: center;
          }
          .cta-badge {
            display: inline-block;
            background: rgba(230, 57, 70, 0.1);
            border: 1px solid rgba(230, 57, 70, 0.2);
            color: var(--theme-color);
            padding: 6px 16px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-radius: 4px;
            margin-bottom: 24px;
            font-family: var(--inter);
          }
          .cta-content-nosotros h2 {
            font-size: 3.5rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 24px;
            line-height: 1.1;
            font-family: var(--futura);
          }
          .cta-content-nosotros p {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.7);
            line-height: 1.6;
            font-family: var(--inter);
          }
          .whatsapp-card-nosotros {
            background: #fff;
            padding: 60px 40px;
            border-radius: 4px;
            text-align: center;
            box-shadow: var(--shadow-lg);
          }
          .whatsapp-icon {
            width: 80px;
            height: 80px;
            background: #25d366;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            font-size: 36px;
            color: #fff;
          }
          .whatsapp-card-nosotros h3 {
            font-size: 24px;
            font-weight: 700;
            color: var(--title-color);
            margin-bottom: 12px;
            font-family: var(--futura);
          }
          .whatsapp-card-nosotros p {
            font-size: 1rem;
            color: var(--text-color);
            margin-bottom: 30px;
            font-family: var(--inter);
          }
          .whatsapp-btn {
            display: inline-block;
            background: #25d366;
            color: #fff;
            padding: 16px 40px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 14px;
            transition: all 0.4s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: 100%;
          }
          .whatsapp-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(37, 211, 102, 0.2);
            background: #20ba5a;
            color: #fff;
          }
          @media (max-width: 1199px) {
            .features-grid-modern {
              grid-template-columns: repeat(2, 1fr);
            }
            .content-box-modern {
              padding-left: 30px;
            }
            .main-title, .cta-content-nosotros h2, .section-header-why h2 {
              font-size: 2.75rem;
            }
          }
          @media (max-width: 991px) {
            .content-box-modern {
              padding-left: 0;
              padding-top: 50px;
              text-align: center;
            }
            .features-list {
              text-align: left;
            }
            .closing-text {
              text-align: left;
            }
            .cta-wrapper-nosotros {
              grid-template-columns: 1fr;
              gap: 50px;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .about-section-modern {
              padding: 80px 0;
            }
            .main-title, .cta-content-nosotros h2, .section-header-why h2 {
              font-size: 2.25rem;
            }
            .experience-box-modern {
              bottom: 20px;
              left: 20px;
              padding: 20px;
            }
            .exp-number {
              font-size: 2rem;
            }
            .why-choose-us-modern {
              padding: 80px 0;
            }
            .features-grid-modern {
              grid-template-columns: 1fr;
            }
            .cta-section-nosotros {
              padding: 80px 0;
            }
            .whatsapp-card-nosotros {
              padding: 40px 30px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
