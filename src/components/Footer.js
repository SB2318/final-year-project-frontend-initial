import "../Styles/Footer.css";

import React from 'react'
import {FaHome,FaMailBulk,FaPhone,FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footerMain">
     
     <div className="footer-container">
       
        <div className="right">
          <h4>A recipe website made by Charlie's Angels</h4>
          <p>This website is our final year project. </p>

          <div className="social-link">

          <a href="https://www.linkedin.com/in/s-bhattacharya-3687621b7/" target="_blank">
          <FaLinkedin size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          <a href="https://mobile.twitter.com/SUSMITA2360" target="_blank">
          <FaTwitter size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>
          
          <a href="https://github.com/SB2318" target="_blank">
          <FaGithub size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          </div>
        </div>
     </div>

    </div>
  )
}

export default Footer