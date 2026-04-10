"use client";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="cta-section-modern">
        <div className="auto-container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <span className="cta-badge">Contactanos Ahora</span>
              <h2>Transforma tus Espacios Hoy Mismo</h2>
              <p>
                Descubre nuestra coleccion completa y dale vida a tus proyectos con 
                molduras decorativas de la mas alta calidad. Nuestro equipo esta listo 
                para asesorarte.
              </p>
              <div className="cta-features">
                <div className="feature-item">
                  <span className="check-icon">&#10003;</span>
                  <span>Asesoria personalizada</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon">&#10003;</span>
                  <span>Envio a toda la republica</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon">&#10003;</span>
                  <span>Precios competitivos</span>
                </div>
              </div>
            </div>
            <div className="cta-action">
              <div className="whatsapp-card">
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

      <style jsx>{`
        .cta-section-modern {
          padding: 120px 0;
          background: #f8f9fa;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .cta-wrapper {
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
        
        .cta-content h2 {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--title-color);
          margin-bottom: 24px;
          line-height: 1.1;
          font-family: var(--futura);
        }
        
        .cta-content p {
          font-size: 1.2rem;
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 40px;
          font-family: var(--inter);
        }
        
        .cta-features {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-color);
          font-size: 15px;
          font-family: var(--inter);
        }
        
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: var(--theme-color);
          color: #fff;
          border-radius: 4px;
          font-size: 10px;
        }
        
        .whatsapp-card {
          background: #fff;
          padding: 60px 40px;
          border-radius: 4px;
          text-align: center;
          position: relative;
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
          box-shadow: 0 8px 16px rgba(37, 211, 102, 0.2);
        }
        
        .whatsapp-icon i {
          font-size: 36px;
          color: #fff;
        }
        
        .whatsapp-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--title-color);
          margin-bottom: 12px;
          font-family: var(--futura);
        }
        
        .whatsapp-card p {
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
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.1);
        }
        
        .whatsapp-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(37, 211, 102, 0.2);
          background: #20ba5a;
          color: #fff;
        }
        
        @media (max-width: 1199px) {
          .cta-content h2 {
            font-size: 2.75rem;
          }
        }

        @media (max-width: 991px) {
          .cta-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          
          .cta-features {
            justify-content: center;
          }

          .cta-content p {
            margin-left: auto;
            margin-right: auto;
            max-width: 600px;
          }
        }
        
        @media (max-width: 767px) {
          .cta-section-modern {
            padding: 80px 0;
          }
          
          .cta-content h2 {
            font-size: 2.25rem;
          }
          
          .feature-item {
            font-size: 14px;
          }
          
          .whatsapp-card {
            padding: 40px 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
