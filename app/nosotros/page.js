"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
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
            background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
          }
          .image-box-modern {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          }
          .image-box-modern figure {
            margin: 0;
          }
          .image-box-modern img {
            width: 100%;
            height: auto;
            display: block;
          }
          .experience-box-modern {
            position: absolute;
            bottom: 30px;
            left: 30px;
            background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 15px 40px rgba(201, 48, 44, 0.3);
          }
          .experience-content {
            color: #fff;
            text-align: center;
          }
          .exp-number {
            font-size: 38px;
            font-weight: 800;
            line-height: 1;
            margin-bottom: 8px;
          }
          .exp-text {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.95;
          }
          .content-box-modern {
            padding-left: 40px;
          }
          .subtitle-badge {
            display: inline-block;
            background: rgba(201, 48, 44, 0.1);
            color: #c9302c;
            padding: 8px 18px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }
          .main-title {
            font-size: 42px;
            font-weight: 800;
            color: #1a1a2e;
            margin-bottom: 20px;
            line-height: 1.25;
          }
          .intro-text {
            font-size: 16px;
            color: #5a5a6e;
            line-height: 1.8;
            margin-bottom: 35px;
          }
          .features-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
          }
          .feature-item {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }
          .feature-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 22px;
            color: #fff;
          }
          .feature-content h4 {
            font-size: 18px;
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 8px 0;
          }
          .feature-content p {
            font-size: 15px;
            color: #5a5a6e;
            line-height: 1.6;
            margin: 0;
          }
          .closing-text {
            font-size: 16px;
            color: #5a5a6e;
            line-height: 1.8;
            font-weight: 500;
          }
          .why-choose-us-modern {
            padding: 100px 0;
            background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
          }
          .section-header-why {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 60px;
          }
          .section-header-why .subtitle {
            display: inline-block;
            color: #c9302c;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 15px;
          }
          .section-header-why h2 {
            font-size: 42px;
            font-weight: 800;
            color: #1a1a2e;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          .section-header-why p {
            font-size: 16px;
            color: #5a5a6e;
            line-height: 1.7;
          }
          .features-grid-modern {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
          .feature-card-modern {
            background: #fff;
            padding: 40px 30px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.05);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }
          .feature-card-modern:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(201, 48, 44, 0.15);
          }
          .feature-icon-modern {
            width: 70px;
            height: 70px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 32px;
            color: #fff;
            transition: all 0.4s ease;
          }
          .feature-icon-modern.quality {
            background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
          }
          .feature-icon-modern.service {
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          }
          .feature-icon-modern.price {
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          }
          .feature-icon-modern.time {
            background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
          }
          .feature-card-modern:hover .feature-icon-modern {
            transform: scale(1.1);
          }
          .feature-card-modern h4 {
            font-size: 20px;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 15px;
            transition: color 0.3s ease;
          }
          .feature-card-modern:hover h4 {
            color: #c9302c;
          }
          .feature-card-modern p {
            font-size: 15px;
            color: #5a5a6e;
            line-height: 1.7;
            margin: 0;
          }
          .cta-section-nosotros {
            padding: 100px 0;
            background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
            position: relative;
            overflow: hidden;
          }
          .cta-wrapper-nosotros {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 60px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .cta-badge {
            display: inline-block;
            background: rgba(201, 48, 44, 0.2);
            color: #e85d5a;
            padding: 8px 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-radius: 30px;
            margin-bottom: 20px;
          }
          .cta-content-nosotros h2 {
            font-size: 40px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          .cta-content-nosotros p {
            font-size: 16px;
            color: rgba(255,255,255,0.8);
            line-height: 1.8;
          }
          .whatsapp-card-nosotros {
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
          }
          .whatsapp-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 32px;
            color: #fff;
          }
          .whatsapp-card-nosotros h3 {
            font-size: 22px;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 10px;
          }
          .whatsapp-card-nosotros p {
            font-size: 14px;
            color: #5a5a6e;
            margin-bottom: 25px;
          }
          .whatsapp-btn {
            display: inline-block;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
            color: #fff;
            padding: 16px 40px;
            border-radius: 30px;
            font-weight: 700;
            font-size: 15px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
            color: #fff;
          }
          @media (max-width: 1199px) {
            .features-grid-modern {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 991px) {
            .content-box-modern {
              padding-left: 0;
              padding-top: 40px;
            }
            .main-title {
              font-size: 32px;
            }
            .cta-wrapper-nosotros {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .cta-content-nosotros h2 {
              font-size: 32px;
            }
          }
          @media (max-width: 767px) {
            .about-section-modern {
              padding: 60px 0;
            }
            .main-title {
              font-size: 28px;
            }
            .experience-box-modern {
              bottom: 20px;
              left: 20px;
              padding: 20px;
            }
            .exp-number {
              font-size: 32px;
            }
            .why-choose-us-modern {
              padding: 60px 0;
            }
            .features-grid-modern {
              grid-template-columns: 1fr;
            }
            .section-header-why h2 {
              font-size: 32px;
            }
            .cta-section-nosotros {
              padding: 60px 0;
            }
            .cta-content-nosotros h2 {
              font-size: 28px;
            }
            .whatsapp-card-nosotros {
              padding: 30px 20px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
