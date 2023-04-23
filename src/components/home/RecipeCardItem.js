import React, { Component } from 'react'
import "../../Styles/RecipeCard.css"

class RecipeCardItem extends Component{

    render(){
        return(
      <div className='recipe-card'>
      <h1>
      <img src={this.props.imgsrc} alt={this.props.title} width="100%"/>
      </h1>
      <h2 className='recipe-title'>{this.props.title}</h2>
      <div className='recipe-text'>
        <p>{`Time Required : ${this.props.text} minutes`}</p>
      </div>

      <div className='pro-btns' style={{left:"60%"}}>

        <a href={this.props.desc} target="_blank" className="btn">
          View Full recipe
        </a>
      </div>

  </div>
        )
    }
}

export default RecipeCardItem