import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
