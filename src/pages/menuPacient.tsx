import CalendarReact from "../components/CalendarReact";
import { redirect, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MenuPacient = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container mb-4">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto mt-4 mb-5">
              <button
                onClick={() => navigate("/paciente/agendar-cita")}
                className="btn btn-primary"
                type="button"
              >
                Agendar Cita
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate("/paciente/citas")}
              >
                Mis Citas
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-4 mb-5 mt-5">
            <CalendarReact />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-8">
            <figure className="bg-white p-3 rounded quote-border">
              <blockquote className="blockquote pb-2">
                <p>
                  El buen médico trata la enfermedad; el gran médico trata al
                  paciente que tiene la enfermedad.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0 font-italic">
              William Osler
              </figcaption>
            </figure>
          </div>
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
