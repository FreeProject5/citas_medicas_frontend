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
}

export default App
