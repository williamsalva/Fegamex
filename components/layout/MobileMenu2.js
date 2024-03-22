"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
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
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/">Home</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/">Home Page One</Link>
                    </li>
                    <li className="current">
                      <Link href="/index-2">Home Page Two</Link>
                    </li>
                    <li>
                      <Link href="/index-3">Home Page Three</Link>
                    </li>
                    <li>
                      <Link href="/index-onepage">OnePage Home</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#service">Service</Link>
                </li>
                <li>
                  <Link href="#video">Video</Link>
                </li>
                <li>
                  <Link href="#testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link href="#news">News</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*menu-outer end*/}
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <Link href="tel:+8801682648101">+88 01682648101</Link>
              </li>
              <li>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </li>
            </ul>
          </div>

          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
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
}
