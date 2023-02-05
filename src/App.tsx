import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Landing from './Pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import MenuPacient from './Pages/menuPacient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/paciente" element={<MenuPacient/>}/>


      </Routes>
    </Router>
   
    
  )
}

export default App
