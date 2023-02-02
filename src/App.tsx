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
}

export default App;
