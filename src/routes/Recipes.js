import React from 'react';

import Navigation from "../components/navigation/Navigation"
import RecipeCard from "../components/home/RecipeCard"
import Footer from "../components/Footer"

const Recipes = ()=>{
  
    return(
        <div>
        <Navigation/>
        <RecipeCard
         isFormHome={false}/>
        <Footer/>
        </div>
    )
}

export default Recipes