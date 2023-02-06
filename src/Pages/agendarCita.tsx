import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import {getDoctors} from "../api/getDoctors"
import { getSpecialities } from "../api/getEspecialities";
import { getPacients } from "../api/getPacients";

const AgendarCita = () => {
  const navigate = useNavigate();
  const usuario = useAuthStore.getState().user[0];
  const [dataForm, setDataForm] = useState({
    firstname: usuario ? usuario.firstname : "",
    lastname: usuario ? usuario.lastname : "",
    speciality: "",
    doctorName: "",
    consultDate: "",
    hour: "",
  });

  const handleInputChange = (e: any) => {
    if (!e.target.value) return;
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataForm);


  };
  return (
    <>
      <Navbar />
      <h2 className="text-center mt-4 mb-4">Agendar Nueva Cita</h2>
      <button className ="btn btn-danger"onClick={getDoctors}>ver doctores</button>
      <button className ="btn btn-info"onClick={getSpecialities}>ver Especialidades</button>
      <button className ="btn btn-info"onClick={getPacients}>ver Pacientes</button>
      {usuario && (
        <form className="form-agendar-cita" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <span>Nombres</span>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    defaultValue={usuario.firstname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <span>Apellidos</span>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    defaultValue={usuario.lastname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <span>Seleccionar Especialidad</span>
              <select
                className="form-select"
                aria-label="Default select example"
                name="speciality"
                value={dataForm.speciality}
                onChange={handleInputChange}
              >
                <option value="1">Cardiologia</option>
                <option value="2">Pediatria</option>
                <option value="3">Oftamologia</option>
              </select>
            </div>

            <div className="form-outline mb-4">
              <span>Seleccionar Doctor</span>
              <select
                className="form-select"
                aria-label="Default select example"
                name="doctorName"
                value={dataForm.doctorName}
                onChange={handleInputChange}
              >
                <option value="Xiang Liang">Xiang Liang</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Carrillo">Carrillo</option>
              </select>
            </div>

            <div className="form-outline mb-4">
              <span>Seleccionar fecha</span>
              <input
                type="date"
                name="consultDate"
                className="form-control"
                onChange={handleInputChange}
                value={dataForm.consultDate}
              />
            </div>

            <div className="form-outline mb-4">
              <span>Seleccionar hora</span>
              <input
                type="time"
                name="hour"
                className="form-control"
                onChange={handleInputChange}
                value={dataForm.hour}
              />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-primary ">
                Reservar
              </button>
              <button
                className="btn btn-danger ms-1 "
                onClick={() => navigate("/paciente")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AgendarCita;
