import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../public/images/logo.png";
import { useAuthStore } from "../store/auth";

const Navbar = () => {
  const isLogged = useAuthStore.getState().isAuth;
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const ManejarClick = () => {
    navigate("/signup");
  };
  const ManejarClick2 = () => {
    navigate("/login");
  };
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {isLogged ? (
              <li className="nav-item">
                <button
                  className="btn btn-primary logout-item"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                >
                  Cerrar Sesión
                </button>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
