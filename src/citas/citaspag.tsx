import CalendarReact from "../components/CalendarReact";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../public/images/logo.png"
import Navbar from "../components/Navbar";
import confirmadas from "../api/getProgramada";
import { useEffect, useState } from "react";

const Paginacitas = () => {
  const navigate = useNavigate();
  const [confirmadass, setConfirmadas] = useState([])
  useEffect(() => {
    confirmadas(setConfirmadas)            
  },[])

  return (
    <>
      
      {/* Cuadro de pagina principal y cerrar sesion */}
      <Navbar /> 
      
      <hr />
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="d-grid gap-2 col-8 mx-auto">

                <div>
                    <h2>Mis citas confirmadas:</h2>
                    {confirmadass !== null ? (
                      confirmadass.map((confirmadass:any) => (
                        <div key={confirmadass.id_patient}>
                          <p> <strong>Nombres del paciente:</strong> {confirmadass.Patient.firstname} {confirmadass.Patient.lastname}</p>
                          <p> <strong>Doctor encargado:</strong> {confirmadass.Doctor.firstname} {confirmadass.Doctor.lastname}</p>
                          <p> <strong>Fecha:</strong> {confirmadass.checkup_date} </p>
                          <br />
                        </div>
                ))
               ) : ('no hay citas programadas')}
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