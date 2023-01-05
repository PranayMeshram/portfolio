import "./Section.css";
import React from 'react'
import InfoImge from "../assets/second.jpg"
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="hero_img">
      <div className="img_first">
         <img className="intro_img" src={InfoImge} alt="" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE DEVELOPER.</p>
        <h2>REACT DEVELOPER <br/>
             AND <br/>
        PHP DEVELOPER</h2>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>




      </div>
    </div>
  )
}

export default Section
