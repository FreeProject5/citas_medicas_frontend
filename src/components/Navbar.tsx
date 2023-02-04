import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../public/images/logo.png";

const Navbar = () => {
  const isLogged = false;
  const navigate = useNavigate();
  const ManejarClick = () => {
    navigate("/signup");
  };
  const ManejarClick2 = () => {
    navigate("/login");
  };
  return (
    <div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>

        {isLogged ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ManejarClick2}>
                  Inicia Sesión
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ManejarClick}>
                  Registrate
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
