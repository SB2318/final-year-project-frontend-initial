import React,{useState} from 'react';
import "../../Styles/Navigation.css";
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from "react-icons/fa";


const Navigation = () => {

  const [navClick, setNavClick] = useState(false);
  const[bgColor,setBgColor] = useState(false);

  const handleClick= ()=>{
    setNavClick(!navClick);
  };

  const changeColor =() =>{

    // If our website scrolled a fixed amount of pixel,then background changed
    if(window.scrollY >= 100){
      setBgColor(true);
    }else{
      setBgColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className={ bgColor? "header header-bg" : "header" }>
         <Link to="/">
           <h1>
          <img src="../../images/jgec_logo.jpg"
                 height="50" width="50" style={{marginLeft:9,marginTop:10}} alt="Your"/>
            
            </h1>
            <h4>Recipes</h4>

        </Link>
        <ul className={navClick ? "nav-menu active":"nav-menu"}>
         <li>
          <Link to="/">Home</Link>
         </li>
         <li>
          <Link to="/recipes">Recipe</Link>
         </li>
         <li>
          <Link to="/about">About</Link>
         </li>
        
         <li>
          <Link to="/contact">Contact</Link>
         </li>
        </ul>

  <div className="hamburger" onClick={handleClick}>

     {navClick ? 
      (<FaTimes size={20} style={{color:"#fff"}}/>
       ): (<FaBars size={20} style={{color:"#fff"}}/>)}

   </div>
    </div>
  )
}

export default Navigation