import React, { Component } from 'react'
import "../../Styles/RecipeCard.css"
import RecipeCardItem from './RecipeCardItem'
import RecipeCardData from './RecipeCardData'

class RecipeCard extends Component{
    render(){

        return(
            <div class='main-container'>

        <h1 className="recipe-heading">
           Let's find your recipe
        </h1>

        <div className='recipe-container'>
           {
            RecipeCardData.map((val,ind)=>{
              return (
                <RecipeCardItem
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                desc= {val.description}
            />
             )
            })
           }
        </div>

        </div>
        )
    }
}

export default RecipeCard