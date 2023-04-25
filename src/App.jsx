import React from 'react'
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Recipes from "./routes/Recipes"
import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";

const App = () => {
  return (

    <>
  <Routes>
<Helmet>
  <title>The Recipes Box</title>
  
  <meta>
  name="description"
  content="Welcome to our recipe app!Our app is designed to make cooking at home easier and more enjoyable than 
  ever before."
  </meta>
  <meta>
  name="keywords"
  content="Recipes for you,very basic recipes,short recipes to write,what food can i make,easiest recipes for students
  what snacks can i make at home,what are some good foods to cook"
  </meta>
</Helmet>
  
    <Route
      path="/"
      element={<Home/>}
    />
    <Route
      path="/recipes"
      element={<Recipes/>}
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