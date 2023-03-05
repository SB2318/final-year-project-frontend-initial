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
           
          <img src="https://media.licdn.com/dms/image/C510BAQE5whJbJz5oGg/company-logo_200_200/0/1585130580548?e=2147483647&v=beta&t=e5gJElC3yCvJHTVAqnoa80I9f2tc528sqtjyP_abZ-Y"
                 height="50" width="50" style={{marginLeft:9,marginTop:10}}/>
            
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