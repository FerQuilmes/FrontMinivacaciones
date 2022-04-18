import React from "react";
import logo from "../assets/images/skol.svg";

const Footer = () => {
  return (
    <footer className="py-0">
      <div className="top">
        <nav className="navbar navbar-expand">
          <div
            className="navbar-collapse flex-lg-nowrap flex-wrap"
            id="footerLinks"
          >
            <ul className="navbar-nav mx-auto social-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/skol.py/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/Skol-Paraguay-335999367631726"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav nav mx-xl-5 mx-lg-3 mx-0 w-100">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.skol.com.py/terminos-y-condiciones"
                >
                  Términos y condiciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.skol.com.py/politicas">
                  Políticas de privacidad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.tapintoyourbeer.com/">
                  Hablemos de alcohol
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.skol.com.py/contacto"
                  target="_blank"
                >
                  Contáctenos
                </a>
              </li>
              <li className="nav-item text-center" id="copy">
                <a
                  className="nav-link"
                  href="https://www.ab-inbev.com"
                  target="_blank"
                >
                  ANHEUSER-BUSCH INBEV © 2021
                </a>
              </li>
            </ul>
            <div className="navbar-logo">
              <img src={logo} alt="Cerveza Skol" id="logo" />
            </div>
          </div>
        </nav>
      </div>
      <div className="bottom">
        <p id="disclaimer">
          Su consumo en exceso daña la salud. Prohibida su venta a menores de 20
          años. Lo advierte el Ministerio de Salud Pública y Bienestar Social.
        </p>
      </div>
    </footer>
  );
};

export default Footer;