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
          background: linear-gradient(180deg, #1a1a2e 0%, #12121c 100%);
        }
        
        .footer-modern .widget-section {
          padding: 80px 0 50px;
          background: transparent;
        }
        
        .footer-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 40px;
          margin-bottom: 50px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .footer-top-bar .footer-logo img {
          max-height: 60px;
        }
        
        .footer-tagline {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          margin: 0;
        }
        
        .widget-title-modern {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 15px;
        }
        
        .widget-title-modern::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #c9302c 0%, #e85d5a 100%);
          border-radius: 2px;
        }
        
        .footer-modern .logo-widget p {
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          margin-bottom: 25px;
        }
        
        .social-links-modern {
          display: flex;
          gap: 12px;
        }
        
        .social-links-modern li a {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .social-links-modern li a:hover {
          background: #c9302c;
          transform: translateY(-3px);
        }
        
        .links-list-modern li {
          margin-bottom: 12px;
        }
        
        .links-list-modern li a {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        
        .links-list-modern li a::before {
          content: '';
          width: 0;
          height: 2px;
          background: #c9302c;
          margin-right: 0;
          transition: all 0.3s ease;
        }
        
        .links-list-modern li a:hover {
          color: #fff;
          padding-left: 10px;
        }
        
        .links-list-modern li a:hover::before {
          width: 15px;
          margin-right: 10px;
        }
        
        .whatsapp-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #fff;
          padding: 14px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .whatsapp-footer-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
          color: #fff;
        }
        
        .whatsapp-footer-btn i {
          font-size: 20px;
        }
        
        .footer-bottom-modern {
          background: rgba(0,0,0,0.2);
          padding: 25px 0;
        }
        
        .footer-bottom-modern .copyright p {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          margin: 0;
        }
        
        .footer-bottom-modern .copyright a {
          color: #c9302c;
          font-weight: 600;
        }
        
        @media (max-width: 991px) {
          .footer-top-bar {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
        
        @media (max-width: 767px) {
          .footer-modern .widget-section {
            padding: 50px 0 30px;
          }
        }
      `}</style>
    </>
  );
}
