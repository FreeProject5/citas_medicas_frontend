import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AgendarCita = () => {
  const [user, setUser] = useState<any>();

  const [dataForm, setDataForm] = useState({
    firstname: user?user.data.firstname:"",
    lastname: user?user.data.lastname:"",
    speciality: "",
    doctorName: "",
    consultDate: "",
    hour: "",
  });

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:6005/api/v1/patient/1`);
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    setUser(responseJson);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const handleViewPacient = () => {
    navigate("/paciente");
  };



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

    fetch("http://localhost:6005/api/v1/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success sent:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Navbar />
      <h2 className="text-center mt-4 mb-4">Agendar Nueva Cita</h2>
      {user && (
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
                    defaultValue={user.data.firstname}
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
                    defaultValue={user.data.lastname}
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
                <option value="Cardiologia">Cardiologia</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Oftamologia">Oftamologia</option>
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
                onClick={handleViewPacient}
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
