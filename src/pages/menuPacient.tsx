import CalendarReact from "../components/CalendarReact";
import { useNavigate } from "react-router-dom";

const MenuPacient =()=>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/paciente/agendar-cita");
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">
              <button onClick={handleClick} className="btn btn-primary" type="button">
                Agendar Cita
              </button>
              <a className="btn btn-secondary" type="button">
                Mis Citas
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4">
            <CalendarReact />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPacient;