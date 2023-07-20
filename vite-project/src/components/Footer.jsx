import React from 'react'
import {FaLinkedin, FaGithub, FaYoutube, FaDownload} from "react-icons/fa"
import "../styles/Footer.css"
import Resume from "../assets/JCResume.pdf"



const Footer = () => {
  return (
    <footer id="footer">
        <div className = "container">
            <div className = "foot">
                <ul>
                    <a href="https://www.linkedin.com/in/jose-cortorreal-909b78265/" target="blank_"><li><FaLinkedin/></li></a>
                    <a href="https://github.com/josecortorreal" target="blank_"><li><FaGithub/></li></a>
        
                </ul>
                <a href={Resume} download><FaDownload className="download" />Resume</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;