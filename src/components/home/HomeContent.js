import React from 'react';
import "../../Styles/HomeContent.css";


const HomeContent = () => {
  return (

    <div classname="heroImg">

        <div className="mask">

            <img className="into-img" src="../../images/home_image.jpg" width="100%"height="100%" alt="Welcome to our food website"/>
        </div>

        <div className="content">
            <h1>A RECIPE IS A STORY THAT ENDS WITH A GOOD MEAL</h1>
             <p>Welcome to our page 😄, Hope you will find what you are looking for😉</p>
           </div>
      </div>       
  )
  }


export default HomeContent