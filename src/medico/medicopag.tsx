import CalendarReact from "../components/CalendarReact";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Paginamedico = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/medico/cita");
  };

  return (
    <>
      {/* Cuadro de pagina principal y cerrar sesion */}
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">

              <a href="index.html"> Pagina principal</a>
            
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4 mb-12">
            <button className="button">Log out</button>
          </div>
        </div>
      </div>
      
      <hr />
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">

              {/* Mostrar citas desde la db */}
            
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
                <p>
                  <label htmlFor="hora">Seleccionar hora:</label>
                </p>
                <p>
                  <input type="text" id="hora" name="hora" />
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