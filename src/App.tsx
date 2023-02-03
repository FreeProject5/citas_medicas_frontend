import React from 'react'
import Landing from './Pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import MenuPacient from './Pages/menuPacient';
import AgendarCita from './Pages/agendarCita';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/paciente" element={<MenuPacient/>}/>
        <Route path="/paciente/agendar-cita" element={<AgendarCita/>}/>
      </Routes>
    </Router>
   
    
  )
}

export default App
