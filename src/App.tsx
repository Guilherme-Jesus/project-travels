import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Main from './components/Main'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App
