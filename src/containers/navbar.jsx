import React from "react";
import logo from "../assets/images/skol.svg";

const Navbar = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-md py-0 navbar-dark">
        <a href="https://www.skol.com.py/" className="navbar-brand">
          <img src={logo} alt="Cerveza Skol" id="logo" />
        </a>
        <button type="button" className="toggle-nav d-md-none d-block">
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-collapse collapse" id="skolMenu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.skol.com.py/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.skol.com.py/nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.skol.com.py/descubri-mas">
                Descubrí Mas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.skol.com.py/retornable">
                Retornable
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.estacion.com.py/skol?map=ft"
                target="_blank"
              >
                Comprar Skol
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.minivacaciones.com.py/?ref=self_nav"
                target="_blank"
              >
                Mini Vacaciones
              </a>
            </li>
            <br className="d-md-none d-block" />
            <li className="nav-item social">
              <a
                className="nav-link"
                href="https://www.instagram.com/skol.py/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item social">
              <a
                className="nav-link"
                href="https://www.facebook.com/Skol-Paraguay-335999367631726"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="navbar-nav ml-auto" id="cta-nav">
            <a href="https://www.skol.com.py/contacto" className="btn btn-cta">
              Newsletter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
