import "./Navbar.css";
import {Link} from "react-router-dom";
import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa';

const Navbar = () => {

    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);


    const [color , setColor] = useState(false);
    const colorChange = () => {
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll" , colorChange)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h2>PRANAY MESHRAM</h2>
        </Link>

        <ul className={click ? "nav_menu active" : "nav_menu" }>
            <li> 
                <Link to="/">Home</Link>
             </li>
            <li> 
                <Link to="/about">About</Link>
             </li>
            <li> 
                <Link to="/project">Project</Link>
             </li>
            <li> 
                <Link to="/contact">Contact</Link>
             </li>
        </ul>

        <div className="hambarger" onClick={handleClick}>

            {click ? (
                
                <FaTimes size={20} style={{color:"#fff"}}   />
            ):(

                <FaBars size={20} style={{color:"#fff"}}   />
            )
        }




        </div>
        





    </div>
  )
}

export default Navbar;