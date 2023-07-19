import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './components/footer'
import Project from './components/Project'
import About from './pages/About'

function App() {
  

  return (
    <>
     <Navbar/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
