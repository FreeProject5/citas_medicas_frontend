import React from "react";
import Navgar from "./Navbar";
import Footer from "./Footer";


const Login = () => {
    return (
    <>
        <Navgar/>
        <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
            <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Inicia Sesión</h2>
                    <form method="POST">
                        <div className="input-group">
                            <label htmlFor="correo">Correo:</label>
                            <input className="input--style-2" type="email" placeholder="Ingresa tu correo" name="email" required/>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                  <label htmlFor="contraseña">Contraseña:</label>
                                  <input className="input--style-2" type="password" placeholder="Ingresa tu contraseña" name="password" required/>
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
    )


}

export default Login;