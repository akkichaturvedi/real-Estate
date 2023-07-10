import React, { useState } from 'react'
import Home from './pages/Home/Home'
import "./App.css"
import About from './layouts/AboutUs/About'
import Contact from './layouts/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Home /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App