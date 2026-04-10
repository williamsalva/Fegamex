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
                padding: 120px 0;
                background: var(--surface-color);
              }

              .section-header-instructions {
                text-align: center;
                max-width: 700px;
                margin: 0 auto 80px;
              }

              .section-header-instructions .subtitle {
                display: inline-block;
                color: var(--theme-color);
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 4px;
                margin-bottom: 24px;
                font-family: var(--inter);
              }

              .section-header-instructions h2 {
                font-size: 3.5rem;
                font-weight: 800;
                color: var(--title-color);
                margin-bottom: 24px;
                line-height: 1.1;
                font-family: var(--futura);
              }

              .section-header-instructions p {
                font-size: 1.15rem;
                color: var(--text-color);
                line-height: 1.6;
                font-family: var(--inter);
              }

              .instructions-content {
                display: grid;
                grid-template-columns: 1.2fr 1fr;
                gap: 80px;
                align-items: center;
              }

              .instructions-steps {
                display: flex;
                flex-direction: column;
                gap: 24px;
              }

              .step-item {
                display: flex;
                gap: 32px;
                padding: 32px;
                background: #fff;
                border-radius: 4px;
                box-shadow: var(--shadow-sm);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(0,0,0,0.03);
              }

              .step-item:hover {
                box-shadow: var(--shadow-lg);
                transform: translateX(10px);
                border-color: rgba(230, 57, 70, 0.1);
              }

              .step-number {
                font-size: 2.5rem;
                font-weight: 800;
                color: var(--theme-color);
                min-width: 60px;
                opacity: 0.1;
                line-height: 1;
                font-family: var(--futura);
              }

              .step-box h4 {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--title-color);
                margin: 0 0 12px 0;
                font-family: var(--futura);
              }

              .step-box p {
                font-size: 1rem;
                color: var(--text-color);
                line-height: 1.6;
                margin: 0;
                font-family: var(--inter);
              }

              .instructions-image {
                border-radius: 4px;
                overflow: hidden;
                box-shadow: var(--shadow-lg);
              }

              .image-figure img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              }

              .instructions-image:hover img {
                transform: scale(1.05);
              }

              @media (max-width: 991px) {
                .instructions-content {
                  grid-template-columns: 1fr;
                  gap: 50px;
                }

                .section-header-instructions h2 {
                  font-size: 2.75rem;
                }
              }

              @media (max-width: 767px) {
                .instructions-section-modern {
                  padding: 80px 0;
                }

                .section-header-instructions h2 {
                  font-size: 2.25rem;
                }

                .step-item {
                  padding: 24px;
                  gap: 20px;
                }

                .step-number {
                  font-size: 2rem;
                  min-width: 40px;
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
                padding: 120px 0;
                background: #fff;
              }

              .section-header-why-instructions {
                text-align: center;
                max-width: 700px;
                margin: 0 auto 80px;
              }

              .section-header-why-instructions .subtitle {
                display: inline-block;
                color: var(--theme-color);
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 4px;
                margin-bottom: 20px;
                font-family: var(--inter);
              }

              .section-header-why-instructions h2 {
                font-size: 3.5rem;
                font-weight: 800;
                color: var(--title-color);
                margin-bottom: 0;
                line-height: 1.1;
                font-family: var(--futura);
              }

              .features-grid-instructions {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 32px;
              }

              .feature-card-instructions {
                background: #fff;
                padding: 48px 32px;
                border-radius: 4px;
                text-align: center;
                box-shadow: var(--shadow-sm);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(0,0,0,0.03);
              }

              .feature-card-instructions:hover {
                transform: translateY(-8px);
                box-shadow: var(--shadow-lg);
                border-color: rgba(230, 57, 70, 0.1);
              }

              .feature-icon-instructions {
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

              .feature-icon-instructions.quality {
                background: var(--theme-color);
              }

              .feature-icon-instructions.service {
                background: var(--secondary-color);
              }

              .feature-icon-instructions.price {
                background: #16a34a;
              }

              .feature-icon-instructions.time {
                background: #ea580c;
              }

              .feature-card-instructions h4 {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--title-color);
                margin-bottom: 16px;
                font-family: var(--futura);
              }

              .feature-card-instructions p {
                font-size: 0.95rem;
                color: var(--text-color);
                line-height: 1.6;
                margin: 0;
                font-family: var(--inter);
              }

              @media (max-width: 1199px) {
                .features-grid-instructions {
                  grid-template-columns: repeat(2, 1fr);
                }
                .section-header-why-instructions h2 {
                  font-size: 2.75rem;
                }
              }

              @media (max-width: 767px) {
                .why-choose-instructions {
                  padding: 80px 0;
                }

                .features-grid-instructions {
                  grid-template-columns: 1fr;
                }

                .section-header-why-instructions h2 {
                  font-size: 2.25rem;
                }
              }
            `}</style>
          </section>
        </div>
      </Layout>
    </>
  );
}
