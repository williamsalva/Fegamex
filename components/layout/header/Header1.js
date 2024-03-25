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
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <Link rel="icon" href="/assets/images/favicon.png" />
        {/* Header Top */}
        <div className="header-top">
          <div className="large-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="fab fa-whatsapp my-whatsapp-icon-header" />
                  <Link href="https://wa.me/523310418179?text=Hola%20Fegamex"> 
                    WhatsApp: 3310418179
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header lower */}
        <div className="header-lower">
          <div className="large-container">
            <div className="outer-box">
              <div className="logo-box">
                <div className="shape"></div>
                <figure className="logo">
                  <Link href="/">
                    <img width={"120%"} src="/assets/images/logo.png" alt="" />
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
              <div className="logo-box">
                <div className="shape"></div>
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="" />
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
    </>
  );
}
