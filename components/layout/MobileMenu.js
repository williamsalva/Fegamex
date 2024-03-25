"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fas fa-times"></i>
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>

          {/*menu-outer*/}
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li>
                  <Link onClick={handleMobileMenu} href="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenu} href="/nosotros/">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMobileMenu} href="/instrucciones/">
                    Instrucciones
                  </Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="" onClick={() => handleToggle(2)}>
                    Productos
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        onClick={handleMobileMenu}
                        href="/molduras-decorativas"
                      >
                        Molduras
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMobileMenu} href="/rosetones">
                        Rosetones
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMobileMenu} href="/puntales-vigas">
                        Puntales y Vigas
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMobileMenu} href="/pegamolduras">
                        Pegamolduras
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMobileMenu} href="/gargolas">
                        Gárgolas
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li>
                  <Link onClick={handleMobileMenu} href="/contact">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*menu-outer end*/}
          <div className="contact-info">
            <h4>
              {" "}
              Envíanos un WhatsApp para recibir nuestro catálogo de productos
            </h4>
            <div className="btn-box">
              <Link
                href="https://wa.me/523310418179?text=interesa%20tu%20catálogo%20de%20productos%20Fegamex%😬"
                className="bnt-WhatsApp-sales"
              >
                <i className="fab fa-whatsapp my-whatsapp-icon-sales"></i>
                WhatsApp
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
