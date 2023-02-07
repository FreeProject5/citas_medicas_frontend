import CalendarReact from "../components/CalendarReact";
import { redirect, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MenuPacient = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">
              <button
                onClick={()=>navigate("/paciente/agendar-cita")}
                className="btn btn-primary"
                type="button"
              >
                Agendar Cita
              </button>
              <button className="btn btn-secondary" type="button" onClick={()=> navigate("/paciente/citas")}>
                Mis Citas
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4 mb-12">
            <CalendarReact />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <div
              className="card position-relative top-0"
              style={{ width: "18rem" }}
            >
              <div className="card-header text-center">Mis citas de Hoy</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Cita de Cardiologia 07:00 hrs
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MenuPacient;
