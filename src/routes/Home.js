import React from 'react';
import Navigation from "../components/navigation/Navigation"
import HomeContent from "../components/home/HomeContent"
import RecipeCard from "../components/home/RecipeCard"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
     <Navigation/>
     <HomeContent/>
     <RecipeCard
      isFromHome={true}/>
     <Footer/>
    </div>
  )
}

export default Home