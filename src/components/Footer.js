import "../Styles/Footer.css";

import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footerMain">
     
     <div className="footer-container">
       
        <div className="right">
          <h4>A recipe website made by Charlie's Angels</h4>
          <p>This website is our final year project. </p>
          <p>© Copyright Team <b>Charlie's Angel</b> All Rights Reserved</p>
          <p>Designed by <b>Susmita Bhattacharya</b></p>
          <div className="social-link">

          <a href="https://www.linkedin.com/school/jalpaiguri-government-engineering-college/?originalSubdomain=in" target="_blank">
          <FaLinkedin size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          <a href="https://twitter.com/jgec_India" target="_blank">
          <FaTwitter size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>
          
          <a href="https://github.com/SB2318/recipe-website" target="_blank">
          <FaGithub size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          </div>
        </div>
     </div>

    </div>
  )
}

export default Footer