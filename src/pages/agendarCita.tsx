import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


interface IEspecialidad {
  id: number;
  name: string;
}

interface IDoctor {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  specialty: number;
}

interface IHorario {
  id: number;
  id_doctor: number;
  date: string; //2023-02-06
  start_time: string; //"09:00:00-05",
  end_time: string; //"16:00:00-05",
}

const AgendarCita = () => {
  const navigate = useNavigate();
  const usuario = useAuthStore.getState().user[0];
  const [especialidades, setEspecialidades] = useState<IEspecialidad[]>([]);
  const [doctores, setDoctores] = useState<IDoctor[]>([]);
  const [horarios, setHorarios] = useState<IHorario[]>([]);

  const getSpecialities = async () => {
    const responseEspecialities = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/specialties"
    );
    setEspecialidades(responseEspecialities.data.data);
  };

  const getDoctors = async () => {
    const responseDoctors = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/doctor"
    );
    setDoctores(responseDoctors.data.data.data);
  };

  const getSchedules = async () => {
    const responseSchedules = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/doctor/findAll/Schedule"
    );
    setHorarios(responseSchedules.data.data.data);
  };
  useEffect(() => {
    getSpecialities();
    getDoctors();
    getSchedules();
  }, []);

  const [dataForm, setDataForm] = useState({
    id_patient: usuario ? usuario.id : 0,
    id_specialtie: 0,
    id_doctor: 0,
    id_schedule: 0,
    checkup_date: "",
    checkup_time: "",
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
    const {
      id_patient,
      id_specialtie,
      id_doctor,
      id_schedule,
      checkup_date,
      checkup_time,
    } = dataForm;
    const formulario = {
      id_patient: id_patient,
      id_specialtie: Number(id_specialtie),
      id_doctor: Number(id_doctor),
      id_schedule: Number(id_schedule),
      checkup_date: checkup_date,
      checkup_time: checkup_time,
    };
    axios
      .post("https://citas-medicas-nu.vercel.app/api/v1/checkup", formulario)
      .then(function (response) {
        console.log(response.status);
        console.log(response);
        navigate("/paciente");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const doctoresFiltrados = doctores.filter(
    (doctor) => doctor.specialty === Number(dataForm.id_specialtie)
  );

  const horariosFiltrados = horarios.filter(
    (horario) => horario.id_doctor === Number(dataForm.id_doctor)
  );

  console.log(horarios);
  return (
    <>
      <Navbar />
      <h2 className="text-center mt-4 mb-4">Agendar Nueva Cita</h2>

      {usuario && (
        <form className="form-agendar-cita mb-5" onSubmit={handleSubmit}>
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
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="id_specialtie"
                value={dataForm.id_specialtie}
                onChange={handleInputChange}
              >
                <option selected>Seleccionar Especialidad</option>
                {especialidades.map((especialidad) => (
                  <option key={especialidad.id} value={especialidad.id}>
                    {especialidad.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-outline mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="id_doctor"
                value={dataForm.id_doctor}
                onChange={handleInputChange}
              >
                <option selected>Seleccionar Doctor</option>
                {doctoresFiltrados.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.firstname + " " + doctor.lastname}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-outline mb-4">
              <select
                name="checkup_date"
                className="form-control"
                onChange={handleInputChange}
                value={dataForm.checkup_date}
              >
                <option selected>Seleccionar fecha</option>
                {horariosFiltrados.map((horario) => (
                  <option key={horario.id} value={horario.date}>
                    {horario.date}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-outline mb-4">
              <select
                name="id_schedule"
                className="form-control"
                onChange={handleInputChange}
                value={dataForm.id_schedule}
              >
                <option selected>Seleccionar horario</option>
                {horariosFiltrados.map((horario) => (
                  <option key={horario.id} value={horario.id}>
                    {horario.start_time + " - " + horario.end_time}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="checkup_time">Selecciona una hora</label>
              <input
                type="time"
                className="form-control"
                name="checkup_time"
                onChange={handleInputChange}
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
      <Footer/>
    </>
  );
};

export default AgendarCita;
