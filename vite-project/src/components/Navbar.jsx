import {useState, useEffect} from 'react';   
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/Navbar.css";
import {FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import {MdOutlineLightMode, MdDarkMode} from "react-icons/md"


const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [navbar, setNavbar] = useState(false);
    

   
    const handleClick = () => setExpandNavbar(!expandNavbar)   


    const changeBackground = () => {
        if(window.scrollY >= 90) {
            setNavbar(true)
        } 
        else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        setExpandNavbar(false);
        window.addEventListener("scroll", changeBackground)
    }, []);

    

    return (
        <>
        {/* <div className = "container"> */}
            <header className = {navbar ? "active" : " "}>
                
                    <div className = "navbar">
                        <a href='#home' className='logoLink'><h1 className = "logo">Corto<span className ="accent">rreal</span></h1></a>
                        <nav className={expandNavbar ? "responsive_nav" : " "}>
                            <a href='#home' onClick={handleClick}>Home</a>
                            <a href='#skills' onClick={handleClick}>Skills</a>
                            <a href='/#projects' onClick={handleClick}>Projects</a>
                            <a href='#contact-me'  onClick={handleClick}>Contact Me</a>
                            {/* <a href={Resume} target="blank_" className ="contact-button" onClick={handleClick}>Resume</a> */}
                            <div className="navIcons">
                                <a href="https://www.linkedin.com/in/jose-cortorreal-909b78265/" target="blank_" className='icons'><FaLinkedin/></a>
        
                                <a href="https://github.com/josecortorreal" target="blank_" className='icons'><FaGithub/></a>
                            </div>
                            <button className="nav-btn nav-close-btn" onClick={() => {
                                setExpandNavbar((prev) => !prev);
                             }}> 
                            
                                <FaTimes/>
                            </button>  
                        </nav>
                    </div>
                
                    <button className="nav-btn" onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}>
                        <FaBars/>
                    </button>

                    
                
            </header>
            {/* </div> */}
            </>
        

    )
}

export default Navbar

