import Navgar from "./Navgar";
import Footer from "./Footer";
import "./Signup.css"
import React, { useState } from 'react';

const SignUp = () => {
  const [edad, setEdad] = useState('');

  const handleChange = (event:any) => {
    const input = event.target.value;
    if (!isNaN(input) && input > 0) {
      setEdad(input);
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
                    <form method="POST">
                        <div className="input-group">
                            <label htmlFor="nombres">Nombres:</label>
                            <input className="input--style-2" type="text" placeholder="Tu nombres aquí" name="firstname" required/>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                  <label htmlFor="apellidos">Apellidos:</label>
                                  <input className="input--style-2" type="text" placeholder="Tu apellidos aquí" name="lastname" required/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                      <label htmlFor="edad">Edad:</label>
                                      <input className="input--style-2" type="number" value={edad} onChange={handleChange} placeholder="Ingresa tu edad aquí" name="age" required/>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                            <label htmlFor="correo">Correo Electrónico:</label>
                            <input className="input--style-2" type="email" placeholder="ejemplo@correo.com" name="email" required/>
                                
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                  <label htmlFor="contraseña">Contraseña:</label>
                                  <input className="input--style-2" type="password" placeholder="Ingresa tu contraseña" name="password" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                  <label htmlFor="telefono">Teléfono:</label>
                                  <input className="input--style-2" type="tel" placeholder="Ingresa tu teléfono" name="email" required/>
                                </div>
                            </div>
                        </div>

                        <div className="p-t-30">
                            <button className="btn btn--radius btn--green" type="submit">Registrate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>





      <Footer/>
      </>
    )
}

export default SignUp;