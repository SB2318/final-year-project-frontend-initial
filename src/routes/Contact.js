import React from 'react'
import Navigation from "../components/navigation/Navigation"
import ContactContent from "../components/ContactContent"
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
    <Helmet>
    <title>Get in touch:Reach out to us</title>
    <meta
     name="description"
     content="Get in touch:Reach out to us."/>   
   </Helmet>
  <Navigation/>  
        
  <ContactContent/>
  <Footer/>
  </div>
  )
}

export default Contact