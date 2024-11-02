import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signin from "./pages/Signin"
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import Navbar from "./components/Navbar"

function App() {

  return (
  <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>

  </div>
  )
}

export default App
