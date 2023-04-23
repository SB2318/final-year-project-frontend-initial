import React, {useState,useEffect} from 'react'
import "../../Styles/RecipeCard.css"
import RecipeCardItem from './RecipeCardItem'
import RecipeCardData from './RecipeCardData';


export default function RecipeCard(){


        const [recipeCardData,setRecipeCardData] = useState([]);

        useEffect(() => {
           
           getRecipeItems();

            return () => {
               
            };
        }, []);

        function getRecipeItems(){
          
        fetch('/recipes')
        .then(result => result.json())
        .then(body => {
            setRecipeCardData(body)
        });
    }

        return(
        <div class='main-container'>

        <div className='recipe-container'>
           {
            recipeCardData.map((val,ind)=>{
                
              return (
                <RecipeCardItem
                key={ind}
                imgsrc={val.IMAGE_URL}
                title={val.RECIPE_TITLE}
                text={val.TIME_TAKEN}
                desc= {val.SOURCE_URL}
            />
             )
            })
           }
        </div>

        </div>
        )
    
    }
