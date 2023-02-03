import React, { useState } from 'react';
import axios from 'axios';
import Navgar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:6005/api/v1/patient/login', { email, password });
      console.log(response.data);
      if (response.status === 200) {
        navigate("/paciente"); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navgar/>
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Inicia Sesión</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="correo">Correo:</label>
                  <input
                    className="input--style-2"
                    type="email"
                    placeholder="Ingresa tu correo"
                    name="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label htmlFor="contraseña">Contraseña:</label>
                      <input
                        className="input--style-2"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-t-30">
                  <button className="btn btn--radius btn--green" type="submit">Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;