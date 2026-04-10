"use client";
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
                  <i className="fas fa-clock" />
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
          background: var(--secondary-color);
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header-top-modern .info-list {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 24px;
        }
        
        .header-top-modern .info-list li {
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          display: flex;
          align-items: center;
          font-family: var(--inter);
        }

        .header-top-modern .info-list li i {
          margin-right: 8px;
          color: var(--theme-color);
          font-size: 15px;
        }
        
        .header-top-modern .info-list li.separator {
          color: rgba(255,255,255,0.2);
        }
        
        .header-top-modern .info-list li a {
          color: rgba(255,255,255,0.8);
          transition: all 0.3s ease;
        }
        
        .header-top-modern .info-list li a:hover {
          color: var(--theme-color);
        }
        
        .logo-box-modern {
          background: white !important;
          padding: 20px !important;
          border-radius: 0 0 12px 12px;
          box-shadow: var(--shadow-md);
        }
        
        .logo-box-modern .shape {
          display: none;
        }
        
        @media (max-width: 767px) {
          .header-top-modern .info-list {
            justify-content: center;
          }
          .header-top-modern .info-list li.separator,
          .header-top-modern .info-list li:last-child {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
