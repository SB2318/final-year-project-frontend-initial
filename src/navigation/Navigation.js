import React,{useState} from 'react';
import "../Styles/Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {

  const [navClick, setNavClick] = useState(false);

  const handleClick= ()=>{
    setNavClick(!navClick);
  };

  return (
    <div className="header">
         <Link to="/">
            <h2>Recipes</h2>
        </Link>
        <ul className="nav-menu">
         <li>
          <Link to="/">Home</Link>
         </li>
         <li>
          <Link to="/about">About</Link>
         </li>
        
         <li>
          <Link to="/contact">Contact</Link>
         </li>
        </ul>
    </div>
  )
}

export default Navigation