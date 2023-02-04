import React, { useState } from "react";
// import axios from "axios";
import Navgar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router';

const SignUp = () => {
  const [register, setRegister] = useState({

    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    phone: "",


  });

  const navigate = useNavigate()

  const handleInputChange = (e: any) => {
    if (!e.target.value) return;
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(register)
    fetch("http://localhost:6005/api/v1/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success sent:", data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  

  return (
    <>
     <Navgar/>
     <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registrate</h2>
              <form onSubmit={handleSubmit}></form>
                <div className="input-group">
                  <label htmlFor="firstname">Nombres:</label>
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Tu nombres aquí"
                    name="firstname"
                    required
                    value={register.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label htmlFor="lastname">Apellidos:</label>
                      <input
                        className="input--style-2"
                        type="text"
                        placeholder="Tu apellidos aquí"
                        name="lastname"
                        required
                        value={register.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                   </div>
                 </div>
                 <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="age">Edad:</label>
                          <input
                            className="input--style-2"
                            type="number"
                            placeholder="Ingresa tu edad aquí"
                            name="age"
                            required
                            value={register.age}
                            onChange={handleInputChange}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="email">Correo Electrónico:</label>
                          <input
                            className="input--style-2"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            name="email"
                            required
                            value={register.email}
                            onChange={handleInputChange}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="password">Contraseña:</label>
                          <input
                            className="input--style-2"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            name="password"
                            required
                            value={register.password}
                            onChange={handleInputChange}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="phone">Teléfono:</label>
                          <input
                            className="input--style-2"
                            type="text"
                            placeholder="Ingresa tu teléfono"
                            name="phone"
                            required
                            value={register.phone}
                            onChange={handleInputChange}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="p-t-30">
                      <button className="btn btn-primary" type="submit">Registrarse</button>
                    </div>
              <form/>
            </div>
            </div>
          </div>
        </div>   
     <Footer/>
    </>
  );   
};

export default SignUp;
