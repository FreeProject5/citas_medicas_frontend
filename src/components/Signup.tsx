import React, { useState } from "react";
import axios from "axios";
import Navgar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router';

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()

  // const handleAgeChange = (event:any) => {
  //   const input = event.target.value;
  //   if (!isNaN(input) && input > 0) {
  //     setAge(input);
  //   }
  // };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // const user = {
    //   firstname,
    //   lastname,
    //   age,
    //   email,
    //   password,
    //   phone,
    // };
    try {
      const response = await axios.post('http://localhost:6005/api/v1/patient/', { firstname, lastname, age, email, password, phone });
      console.log(response.data);
      if (response.status === 200) {
        navigate("/login"); 
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
              <h2 className="title">Registrate</h2>
              <form onSubmit={handleSubmit}></form>
                <div className="input-group">
                  <label htmlFor="nombres">Nombres:</label>
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Tu nombres aquí"
                    name="firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label htmlFor="apellidos">Apellidos:</label>
                      <input
                        className="input--style-2"
                        type="text"
                        placeholder="Tu apellidos aquí"
                        name="lastname"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                   </div>
                 </div>
                 <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="edad">Edad:</label>
                          <input
                            className="input--style-2"
                            type="number"
                            placeholder="Ingresa tu edad aquí"
                            name="age"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="correo">Correo Electrónico:</label>
                          <input
                            className="input--style-2"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="contraseña">Contraseña:</label>
                          <input
                            className="input--style-2"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                       </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <label htmlFor="telefono">Teléfono:</label>
                          <input
                            className="input--style-2"
                            type="text"
                            placeholder="Ingresa tu teléfono"
                            name="phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
