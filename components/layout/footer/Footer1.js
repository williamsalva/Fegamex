import Link from "next/link";

export default function Footer1() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-8.png)",
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-9.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="/assets/images/logo.png" alt="" />
                    </Link>
                  </figure>
                  <p>
                    {" "}
                    Somos expertos en la comercialización y producción de
                    molduras, destacándonos por nuestra habilidad artística y
                    artesanal.{" "}
                  </p>
                  <ul className="social-links">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_40">
                  <div className="widget-title">
                    <h4>Productos</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
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
                        <Link href="/gargolas">Gárgolas</Link>
                      </li>
                      <li>
                        <Link href="/pegamolduras">Pegamolduras</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h4>
                      Envianos un WhatsApp para recibir nuestro catálogo de
                      productos
                    </h4>
                  </div>
                  <div className="btn-box">
                    <Link
                      href="https://wa.me/send?phone=523315128570&text=Me interesa tu catálogo de productos Fegamex 😬"
                      className="bnt-WhatsApp-sales"
                    >
                      <i className="fab fa-whatsapp my-whatsapp-icon-sales"></i>
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                Copyright {currentYear} by <Link href="/">Fegamex</Link>. Todos
                los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
