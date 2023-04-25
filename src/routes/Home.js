import React from 'react';
import Navigation from "../components/navigation/Navigation"
import HomeContent from "../components/home/HomeContent"
import RecipeCard from "../components/home/RecipeCard"
import Footer from "../components/Footer"
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
  <div>
  <title>The Recipes Box</title>
  <meta
    name="description"
   content="Welcome to our recipe app!Our app is designed to make cooking at home easier and more enjoyable than 
  ever before." />
  
  <meta
  name="keywords"
  content="Recipes for you,Recipes 4 you,very basic recipes,Best food recipes,short recipes to write,what food can i make,What should i cook for dinner,easiest recipes for students
  what snacks can i make at home,what are some good foods to cook"/>
  <Navigation/>
  <HomeContent/>
  <RecipeCard
    isFromHome={true}/>
  <Footer/>
  </div>
  )
}

export default Home