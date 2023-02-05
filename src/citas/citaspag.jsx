import CalendarReact from "../components/CalendarReact";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../public/images/logo.png"

const Paginacitas = () => {
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

              <img src = {logo} className = "logo" alt = "logo"/>
            
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

                <div>
                    <label>Mis citas confirmadas:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Mis citas por confirmar:</label>
                    <input type="text"/>
                </div>
            
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4 mb-12">
            <CalendarReact />
          </div>
        </div>

        <hr />

      </div>
      <Footer />
    </>
  );
};

export default Paginacitas;