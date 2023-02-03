import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Landing from './Pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import MenuPacient from './Pages/menuPacient';
import AgendarCita from './Pages/agendarCita';
import Paginamedico from './medico/medicopag';
import Paginacitas from './citas/citaspag';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>Ñ
        <Route path="/paciente" element={<MenuPacient/>}/>
        <Route path="/paciente/agendar-cita" element={<AgendarCita/>}/>
        <Route path="/medico" element={<Paginamedico/>}/>
        <Route path="/citas" element={<Paginacitas/>}/>
      </Routes>
    </Router>
   
    
  )
}

export default App
