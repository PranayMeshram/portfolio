import "./Aboutsection.css"
import React from 'react'
import {Link} from 'react-router-dom'
import first from '../assets/first.jpg'
import about from '../assets/about.png'
const Aboutsection = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am i ?</h1>
                <p>I am a React Front-end and Php Back-end Developer. I Create Responsive Secure Website.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">

                     <img src={first} alt="" className="img" />

                    </div>
                    <div className="img-stack bottom">

                     <img src={about} alt="" className="img" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutsection
