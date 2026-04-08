"use client";
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="instructions-section-modern">
            <div className="auto-container">
              <div className="section-header-instructions">
                <span className="subtitle">Guía de Instalación</span>
                <h2>Instrucciones de Uso para Pegamolduras</h2>
                <p>Sigue estos pasos simples para una instalación perfecta y duradera</p>
              </div>

              <div className="instructions-content">
                <div className="instructions-steps">
                  <div className="step-item wow fadeInUp animated" data-wow-delay="00ms">
                    <div className="step-number">01</div>
                    <div className="step-box">
                      <h4>Preparación de la Superficie</h4>
                      <p>Asegúrate de que la superficie este completamente libre de grasa y polvo. No añadas agua ni otro líquido en ningún momento.</p>
                    </div>
                  </div>

                  <div className="step-item wow fadeInUp animated" data-wow-delay="100ms">
                    <div className="step-number">02</div>
                    <div className="step-box">
                      <h4>Medición y Preparación del Adhesivo</h4>
                      <p>Determina el ancho adecuado (2cm - 6cm según tamaño de moldura). El espesor recomendado del adhesivo es de 3mm.</p>
                    </div>
                  </div>

                  <div className="step-item wow fadeInUp animated" data-wow-delay="200ms">
                    <div className="step-number">03</div>
                    <div className="step-box">
                      <h4>Colocación y Fijación</h4>
                      <p>Presiona firmemente la moldura contra la pared. Recomendamos clavar la parte inferior inmediatamente después para asegurar una unión sólida.</p>
                    </div>
                  </div>

                  <div className="step-item wow fadeInUp animated" data-wow-delay="300ms">
                    <div className="step-number">04</div>
                    <div className="step-box">
                      <h4>Eliminación de Excedente</h4>
                      <p>Retira el adhesivo excedente con una herramienta adecuada mientras aún este húmedo, ya que se endurece rápidamente.</p>
                    </div>
                  </div>

                  <div className="step-item wow fadeInUp animated" data-wow-delay="400ms">
                    <div className="step-number">05</div>
                    <div className="step-box">
                      <h4>Tiempo de Secado</h4>
                      <p>Evita mover las molduras durante 24 horas para permitir que el adhesivo se fije completamente y asegurar una adhesión duradera.</p>
                    </div>
                  </div>
                </div>

                <div className="instructions-image">
                  <figure className="image-figure">
                    <img src="/assets/images/resource/habitacion.jpg" alt="Instalación de molduras decorativas" />
                  </figure>
                </div>
              </div>
            </div>

            <style jsx>{`
              .instructions-section-modern {
                padding: 100px 0;
                background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
              }

              .section-header-instructions {
                text-align: center;
                max-width: 600px;
                margin: 0 auto 60px;
              }

              .section-header-instructions .subtitle {
                display: inline-block;
                color: #c9302c;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 15px;
              }

              .section-header-instructions h2 {
                font-size: 42px;
                font-weight: 800;
                color: #1a1a2e;
                margin-bottom: 20px;
                line-height: 1.2;
              }

              .section-header-instructions p {
                font-size: 16px;
                color: #5a5a6e;
                line-height: 1.7;
              }

              .instructions-content {
                display: grid;
                grid-template-columns: 1.2fr 1fr;
                gap: 50px;
                align-items: center;
              }

              .instructions-steps {
                display: flex;
                flex-direction: column;
                gap: 20px;
              }

              .step-item {
                display: flex;
                gap: 25px;
                padding: 25px;
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                transition: all 0.4s ease;
              }

              .step-item:hover {
                box-shadow: 0 15px 40px rgba(201, 48, 44, 0.1);
                transform: translateX(10px);
              }

              .step-number {
                font-size: 32px;
                font-weight: 800;
                color: #c9302c;
                min-width: 60px;
                opacity: 0.2;
              }

              .step-box h4 {
                font-size: 18px;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0 0 10px 0;
              }

              .step-box p {
                font-size: 15px;
                color: #5a5a6e;
                line-height: 1.6;
                margin: 0;
              }

              .instructions-image {
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0,0,0,0.12);
              }

              .image-figure {
                margin: 0;
              }

              .image-figure img {
                width: 100%;
                height: auto;
                display: block;
              }

              @media (max-width: 991px) {
                .instructions-content {
                  grid-template-columns: 1fr;
                  gap: 40px;
                }

                .section-header-instructions h2 {
                  font-size: 32px;
                }
              }

              @media (max-width: 767px) {
                .instructions-section-modern {
                  padding: 60px 0;
                }

                .section-header-instructions h2 {
                  font-size: 28px;
                }

                .step-item {
                  padding: 20px;
                }

                .step-number {
                  font-size: 28px;
                  min-width: 50px;
                }
              }
            `}</style>
          </section>
          <section className="why-choose-instructions">
            <div className="auto-container">
              <div className="section-header-why-instructions">
                <span className="subtitle">Nuestros Valores</span>
                <h2>Por qué Elegirnos</h2>
              </div>

              <div className="features-grid-instructions">
                <div className="feature-card-instructions wow fadeInUp animated" data-wow-delay="00ms">
                  <div className="feature-icon-instructions quality">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h4>Calidad Superior</h4>
                  <p>Molduras fabricadas con los mejores materiales para garantizar durabilidad y resistencia excepcional.</p>
                </div>

                <div className="feature-card-instructions wow fadeInUp animated" data-wow-delay="100ms">
                  <div className="feature-icon-instructions service">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h4>Atención al Cliente</h4>
                  <p>Servicio personalizado y asesoramiento experto para garantizar la satisfacción en cada proyecto.</p>
                </div>

                <div className="feature-card-instructions wow fadeInUp animated" data-wow-delay="200ms">
                  <div className="feature-icon-instructions price">
                    <i className="fas fa-piggy-bank"></i>
                  </div>
                  <h4>Precios Competitivos</h4>
                  <p>Productos de alta calidad a precios accesibles, sin comprometer tu presupuesto de decoración.</p>
                </div>

                <div className="feature-card-instructions wow fadeInUp animated" data-wow-delay="300ms">
                  <div className="feature-icon-instructions time">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h4>Fácil Instalación</h4>
                  <p>Molduras de instalación sencilla que te ahorran tiempo y esfuerzo en tus proyectos.</p>
                </div>
              </div>
            </div>

            <style jsx>{`
              .why-choose-instructions {
                padding: 100px 0;
                background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
              }

              .section-header-why-instructions {
                text-align: center;
                max-width: 600px;
                margin: 0 auto 60px;
              }

              .section-header-why-instructions .subtitle {
                display: inline-block;
                color: #c9302c;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 15px;
              }

              .section-header-why-instructions h2 {
                font-size: 42px;
                font-weight: 800;
                color: #1a1a2e;
                margin-bottom: 0;
                line-height: 1.2;
              }

              .features-grid-instructions {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
              }

              .feature-card-instructions {
                background: #fff;
                padding: 40px 30px;
                border-radius: 16px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
              }

              .feature-card-instructions::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #c9302c 0%, #e85d5a 100%);
                transform: translateX(-100%);
                transition: transform 0.4s ease;
              }

              .feature-card-instructions:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 60px rgba(201, 48, 44, 0.15);
              }

              .feature-card-instructions:hover::before {
                transform: translateX(0);
              }

              .feature-icon-instructions {
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

              .feature-icon-instructions.quality {
                background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
              }

              .feature-icon-instructions.service {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
              }

              .feature-icon-instructions.price {
                background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
              }

              .feature-icon-instructions.time {
                background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
              }

              .feature-card-instructions:hover .feature-icon-instructions {
                transform: scale(1.1);
              }

              .feature-card-instructions h4 {
                font-size: 20px;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 15px;
                transition: color 0.3s ease;
              }

              .feature-card-instructions:hover h4 {
                color: #c9302c;
              }

              .feature-card-instructions p {
                font-size: 15px;
                color: #5a5a6e;
                line-height: 1.7;
                margin: 0;
              }

              @media (max-width: 1199px) {
                .features-grid-instructions {
                  grid-template-columns: repeat(2, 1fr);
                }
              }

              @media (max-width: 767px) {
                .why-choose-instructions {
                  padding: 60px 0;
                }

                .features-grid-instructions {
                  grid-template-columns: 1fr;
                }

                .section-header-why-instructions h2 {
                  font-size: 32px;
                }
              }
            `}</style>
          </section>
        </div>
      </Layout>
    </>
  );
}
