import React from 'react'
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <>
  <Routes>
    <Route
      path="/"
      element={<Home/>}
    />
    <Route
      path="/about"
      element={<About/>}
    />
    
    <Route
      path="/contact"
      element={<Contact/>}
    />
  </Routes>
    </>
  )
}

export default App