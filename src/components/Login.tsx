import React, { useState } from "react";
import { loginRequest } from "../api/login";
import { useAuthStore } from "../store/auth";
import loginIcon from "../public/images/login-icon.svg";
import loginUserIcon from "../public/images/username-icon.svg";
import passwordIcon from "../public/images/password-icon.svg";
import Navgar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router";

const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resLogin = await loginRequest(email, password);
    if (resLogin.status === 200) {
      console.log(resLogin);
      setToken(resLogin.data.token);
      setUser(resLogin.data.data);
      navigate("/paciente");
    }
  };

  return (
    <>
      <Navgar /> 
      
      <div className="login_section">
        <div className="justify-content-center align-items-center vh-130 font-robo" >
          <h2 className="text-center fs-1 text_color"><br></br>INICIAR SESIÓN</h2>
          <br />
          <form onSubmit={handleSubmit} className="form-login">
          <div className="d-flex justify-content-center">
            <img
              src={loginIcon}
              alt="login-icon"
              style={{ height: "7rem" }}
            />
          </div>
            <span className="mt-4 text_color">EMAIL:</span>
            <div className="input-group mt-4 svg">
              <div className="input-group-text bg-info">
                <img
                  src={loginUserIcon}
                  alt="username-icon"
                  style={{height: "1rem"}}

                />
              </div>
              <input
                className="form-control"
                type="email"
                placeholder="ejemplo@correo.com"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <span className= "text_color">CONTRASEÑA:</span>
            <div className="input-group mt-1">
              <div className="input-group-text bg-info">
                <img
                  src={passwordIcon}
                  alt="password-icon"
                  style={{height: "1rem"}}
                />
              </div>
              <input
                className="form-control"
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="btn btn-success bg-info mt-4 fw-semibold shadow-sm"
              type="submit"
            >
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
