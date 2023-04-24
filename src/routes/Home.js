import React from 'react';
import Navigation from "../components/navigation/Navigation"
import HomeContent from "../components/home/HomeContent"
import RecipeCard from "../components/home/RecipeCard"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
  <title>Cooking with love:Comforting recipes for every season.</title>
  
  <meta>
  name="description"
  content="Indulge in the delicious and wholesome world of home cooking with our mouth-watering recipes. Join us on a journey of culinary creativity."
  </meta>
  <meta>
  name="keywords"
  content="Good food at home,Best food recipe,What should i cook for dinner,Easiest recipe for students,
  10-minute recipes"
  </meta>
</Helmet>
     <Navigation/>
     <HomeContent/>
     <RecipeCard
      isFromHome={true}/>
     <Footer/>
    </div>
  )
}

export default Home