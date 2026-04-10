"use client";
import Link from "next/link";

export default function Footer1() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer footer-modern">
        <div className="widget-section">
          <div className="auto-container">
            <div className="footer-top-bar">
              <figure className="footer-logo">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt="Fegamex" />
                </Link>
              </figure>
              <p className="footer-tagline">
                Expertos en molduras decorativas de alta calidad
              </p>
            </div>
            
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <h4 className="widget-title-modern">Sobre Nosotros</h4>
                  <p>
                    Somos expertos en la comercializacion y produccion de
                    molduras decorativas, destacandonos por nuestra habilidad artistica,
                    artesanal y compromiso con la calidad.
                  </p>
                  <ul className="social-links social-links-modern">
                    <li>
                      <Link href="/" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/523310418179" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title-modern">Productos</h4>
                  <div className="widget-content">
                    <ul className="links-list links-list-modern clearfix">
                      <li>
                        <Link href="/molduras-decorativas">
                          Molduras decorativas
                        </Link>
                      </li>
                      <li>
                        <Link href="/rosetones">Rosetones</Link>
                      </li>
                      <li>
                        <Link href="/puntales-vigas">Puntales y Vigas</Link>
                      </li>
                      <li>
                        <Link href="/gargolas">Gargolas</Link>
                      </li>
                      <li>
                        <Link href="/pegamolduras">Pegamolduras</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <h4 className="widget-title-modern">Solicita tu Catalogo</h4>
                  <p style={{ marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>
                    Recibe nuestro catalogo completo de productos directamente en tu WhatsApp.
                  </p>
                  <div className="btn-box">
                    <Link
                      href="https://wa.me/send?phone=523315128570&text=Me interesa tu catálogo de productos Fegamex"
                      className="whatsapp-footer-btn"
                    >
                      <i className="fab fa-whatsapp"></i>
                      Solicitar Catalogo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-bottom-modern centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                {currentYear} <Link href="/">Fegamex</Link> - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-modern {
          background: var(--secondary-color);
        }
        
        .footer-modern .widget-section {
          padding: 100px 0 60px;
          background: transparent;
        }
        
        .footer-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 40px;
          margin-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .footer-top-bar .footer-logo img {
          max-height: 50px;
          filter: brightness(0) invert(1);
        }
        
        .footer-tagline {
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          margin: 0;
          font-family: var(--inter);
        }
        
        .widget-title-modern {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 30px;
          position: relative;
          font-family: var(--futura);
        }
        
        .widget-title-modern::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 30px;
          height: 2px;
          background: var(--theme-color);
        }
        
        .footer-modern .logo-widget p {
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 30px;
          font-family: var(--inter);
        }
        
        .social-links-modern {
          display: flex;
          gap: 16px;
        }
        
        .social-links-modern li a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.4s ease;
        }
        
        .social-links-modern li a:hover {
          background: var(--theme-color);
          color: #fff;
          border-color: var(--theme-color);
          transform: translateY(-4px);
        }
        
        .links-list-modern li {
          margin-bottom: 14px;
        }
        
        .links-list-modern li a {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          transition: all 0.3s ease;
          font-family: var(--inter);
        }
        
        .links-list-modern li a:hover {
          color: var(--theme-color);
          padding-left: 8px;
        }
        
        .whatsapp-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--theme-color);
          color: #fff;
          padding: 14px 28px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.4s ease;
          box-shadow: var(--shadow-md);
        }
        
        .whatsapp-footer-btn:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          background: #ff4d5a;
          color: #fff;
        }
        
        .whatsapp-footer-btn i {
          font-size: 18px;
        }
        
        .footer-bottom-modern {
          background: rgba(0,0,0,0.1);
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        .footer-bottom-modern .copyright p {
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          margin: 0;
          font-family: var(--inter);
        }
        
        .footer-bottom-modern .copyright a {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }
        
        .footer-bottom-modern .copyright a:hover {
          color: var(--theme-color);
        }
        
        @media (max-width: 991px) {
          .footer-top-bar {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        @media (max-width: 767px) {
          .footer-modern .widget-section {
            padding: 70px 0 40px;
          }
        }
      `}</style>
    </>
  );
}
