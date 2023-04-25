import React from 'react';

import Navigation from "../components/navigation/Navigation"
import RecipeCard from "../components/home/RecipeCard"
import Footer from "../components/Footer"
import { Helmet } from 'react-helmet-async';

const Recipes = ()=>{
  
return(
    <div>
  <Helmet>
    <title>From our kitchen to yours:Easy and delicious home cooked meals.</title>
  
    <meta
     name="description"
     content="Discover a treasure trove of scrumptious recipes that will tantalize. Get ready to unleash your inner chef and delight your senses with our flavorful recipes"/>
    
    <meta
     name="keywords"
     content="Food recipe with pictures,Simple home cooked recipes,The recipes,DIY cooking recipes,10-minute recipes,Dinner recipes,Search recipe "/>
    
   </Helmet>
    <Navigation/>
    <RecipeCard
     isFormHome={false}/>
    <Footer/>
        </div>
    )
}

export default Recipes