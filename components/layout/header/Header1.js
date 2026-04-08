import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header
        className={`main-header header-style-one header-modern ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
        {/* Header Top */}
        <div className="header-top header-top-modern">
          <div className="large-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="fab fa-whatsapp my-whatsapp-icon-header" />
                  <Link href="https://wa.me/523310418179?text=Hola%20Fegamex">
                    WhatsApp: 331 041 8179
                  </Link>
                </li>
                <li className="separator">|</li>
                <li>
                  <i className="fas fa-clock" style={{ color: '#c9302c', marginRight: '8px' }} />
                  <span>Lun - Sab: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header lower */}
        <div className="header-lower">
          <div className="large-container">
            <div className="outer-box">
              <div className="logo-box logo-box-modern">
                <div className="shape"></div>
                <figure className="logo">
                  <Link href="/">
                    <img width={"120%"} src="/assets/images/logo.png" alt="Fegamex - Molduras Decorativas" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*End Header lower*/}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="large-container">
            <div className="outer-box">
              <div className="logo-box logo-box-modern">
                <div className="shape"></div>
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Fegamex" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>

      <style jsx>{`
        .header-modern .header-top-modern {
          background: linear-gradient(90deg, #1a1a2e 0%, #2d2d44 100%);
          padding: 12px 0;
        }
        
        .header-top-modern .info-list {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
        }
        
        .header-top-modern .info-list li {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
        }
        
        .header-top-modern .info-list li.separator {
          color: rgba(255,255,255,0.3);
          padding: 0;
          margin: 0;
        }
        
        .header-top-modern .info-list li a {
          color: rgba(255,255,255,0.9);
          transition: color 0.3s ease;
        }
        
        .header-top-modern .info-list li a:hover {
          color: #c9302c;
        }
        
        .logo-box-modern {
          background: linear-gradient(135deg, #c9302c 0%, #a02724 100%) !important;
        }
        
        .logo-box-modern .shape {
          background: linear-gradient(135deg, #c9302c 0%, #a02724 100%) !important;
        }
        
        @media (max-width: 767px) {
          .header-top-modern .info-list li.separator,
          .header-top-modern .info-list li:last-child {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
