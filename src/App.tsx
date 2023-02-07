import React from "react";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { useAuthStore } from "./store/auth";
import Login from "./components/Login";
import MenuPacient from "./pages/menuPacient";
import AgendarCita from "./pages/agendarCita";
import SignUp from "./components/Signup";
import Paginamedico from "./medico/medicopag";
import Paginacitas from "./citas/citaspag";
import Loginmedico from "./medico/Loginmedico";

function App() {
  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-medico" element={<Loginmedico />} />
        {/* Rutas Protegidas Pacientes*/}
        <Route path="/paciente" element={ isAuth ?(<MenuPacient />):<Navigate to="/login"/>} />
        <Route path="/paciente/agendar-cita" element={ isAuth ? (<AgendarCita/>):<Navigate to="/login"/>} />
        <Route path="/paciente/citas" element={ isAuth ? (<Paginacitas/>):<Navigate to="/login"/>} />
        {/* Rutas Protegidas Medicos */}
        <Route path="/medico" element={ isAuth ? (<Paginamedico/>):<Navigate to="/login-medico"/>} />
      </Routes>
    </Router>
  );
}

export default App;
