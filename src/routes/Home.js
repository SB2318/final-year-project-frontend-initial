import React from 'react';
import Navigation from "../components/navigation/Navigation"
import HomeContent from "../components/home/HomeContent"
import RecipeCard from "../components/home/RecipeCard"

const Home = () => {
  return (
    <div>
     <Navigation/>
     <HomeContent/>
     <RecipeCard/>
    </div>
  )
}

export default Home