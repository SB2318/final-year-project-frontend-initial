import React from 'react'
import Navigation from "../components/navigation/Navigation"
import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
  <div>
  <Helmet>
  <title>About us:Cooking with love and tradition.</title>

  <meta
   name="description"
   content="Join us as we share our story, vision, and values, and how they shape our love for cooking and sharing delicious meals."/>
  
</Helmet>
<Navigation/>  
<AboutContent />
<Footer/>
</div>
    
)
}

export default About