<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './Pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>


      </Routes>
    </Router>
   
    
  )
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MenuPacient from './pages/menuPacient';

function App(){
  
  return (
    <Router>
    <Routes>
      <Route path="/paciente" element={<MenuPacient/>}/>
    </Routes>
  </Router>
  );
>>>>>>> af3aee4c9866694fb6d1a995bc276e7bdce0217b
}

export default App
