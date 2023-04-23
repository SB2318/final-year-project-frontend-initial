import React, {useState,useEffect} from 'react'
import "../../Styles/RecipeCard.css"
import RecipeCardItem from './RecipeCardItem'
import RecipeCardData from './RecipeCardData';


const RecipeCard = (props)=>{


        const [recipeCardData,setRecipeCardData] = useState([]);
        var resultData=[];

        useEffect(() => {
           
           getRecipeItems();

            return () => {
               
            };
        }, []);

        function getRecipeItems(){
          
        fetch('/recipes')
        .then(result => result.json())
        .then(body => {

            var homeData= body;
            if(props.isFromHome === true){
              
                for(var i=homeData.length-1; i>=homeData.length-6;i--){
                   resultData.push(homeData[i]);
                }

                setRecipeCardData(resultData);
            }else{
            setRecipeCardData(body)
            }
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

    export default RecipeCard;
