import React, { Component } from 'react'
import "../../Styles/RecipeCard.css"

class RecipeCardItem extends Component{

    render(){
        return(
      <div className='recipe-card'>
      <img src={this.props.imgsrc} alt={this.props.title}/>
      <h2 className='recipe-title'>{this.props.title}</h2>
      <div className='recipe-text'>
        <p>{this.props.text}</p>
      </div>

      <div className='pro-btns'>

        <a href={this.props.view} target="_blank" className="btn">
          View Full recipe
        </a>
      </div>

  </div>
        )
    }
}

export default RecipeCardItem