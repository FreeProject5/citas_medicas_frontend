import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../public/images/logo.png"

const Navgar = () => {
  const navigate = useNavigate() 
  const ManejarClick = () => {
    navigate ("/signup")

  }
  const ManejarClick2 = () => {
    navigate ("/login")

  }
  return (
    <div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <a href="/">
            <img src = {logo} className = "logo" alt = "logo"/>
            
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
      </nav>
    </div>
  );
};

export default Navgar;
