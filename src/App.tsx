import React from 'react'
import Landing from './Pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthStore } from './store/auth';
import Login from './components/Login';
import MenuPacient from './Pages/menuPacient';
import AgendarCita from './Pages/agendarCita';
import SignUp from './components/Signup';
import Paginamedico from './medico/medicopag';
import Paginacitas from './citas/citaspag';
import { ProtectedRoute } from './components/ProtectedRoute';
import Loginmedico from './medico/Loginmedico';


function App() {

  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path="/paciente" element={
            <MenuPacient/>
          } />
          <Route path="/paciente/agendar-cita" element={
            <AgendarCita/>
            }/>
          <Route path="paciente/citas" element={<Paginacitas/>}/>
        </Route>
        
        <Route path="/login-medico" element={<Loginmedico/>}/>
        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path="/medico" element={
            <Paginamedico/>
          } />
        </Route>

      </Routes>
    </Router>
   
    
  )
}

export default App
