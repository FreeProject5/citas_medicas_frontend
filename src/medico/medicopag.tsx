import CalendarReact from "../components/CalendarReact";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import citas_pro from "../api/getCitas";
import { useEffect, useState } from "react";

const Paginamedico = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/medico/cita");
  };

  const [pro_citass, setProcitas] = useState([])
  useEffect(() => {
    citas_pro(setProcitas)            
  },[])

  return (
    <>
      <Navbar /> 
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">
              <h2>Citas programadas</h2>
               {pro_citass !== null ? (
                pro_citass.map((pro_citass:any) => (
                  <div key={pro_citass.id}>
                    <p> Id_cita: {pro_citass.id} </p>
                     <p>Id_medico: {pro_citass.id_doctor}</p>
                    <p> Fecha de la cita: {pro_citass.date} </p>
                  </div>
                ))
               ) : ('no hay citas programadas')}
            
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4 mb-12">
            <CalendarReact />
          </div>
        </div>

        <hr />
        
        {/* Formulario */}

        <div className="container">
          <div className="row align-items-center">
              <h3>Registro de horarios disponibles</h3>
              <form action="submit-form.php" method="post">
                <p>
                  <label htmlFor="dia">Seleccionar dia:</label>
                </p>
                <p>
                  <input type="text" id="dia" name="dia" />
                </p>

                <input type="submit" defaultValue="Enviar" />
              </form>
          </div>
        </div>

      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Paginamedico;