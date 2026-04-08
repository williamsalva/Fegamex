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
          padding: 100px 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          position: relative;
          overflow: hidden;
        }
        
        .cta-section-modern::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201, 48, 44, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }
        
        .cta-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
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
        
        .cta-content h2 {
          font-size: 40px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .cta-content p {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        
        .cta-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.9);
          font-size: 14px;
        }
        
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(201, 48, 44, 0.3);
          color: #e85d5a;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }
        
        .whatsapp-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          position: relative;
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
        }
        
        .whatsapp-icon i {
          font-size: 32px;
          color: #fff;
        }
        
        .whatsapp-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 10px;
        }
        
        .whatsapp-card p {
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
        
        @media (max-width: 991px) {
          .cta-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .cta-content h2 {
            font-size: 32px;
          }
        }
        
        @media (max-width: 767px) {
          .cta-section-modern {
            padding: 60px 0;
          }
          
          .cta-content h2 {
            font-size: 28px;
          }
          
          .cta-features {
            flex-direction: column;
            gap: 15px;
          }
          
          .whatsapp-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
