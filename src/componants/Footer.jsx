import "./Footer.css";
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaSkype} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_container">
            <div className="left">
                <div className="location">
                    <h4>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
                        ASHOKNAGAR BHANDARA 
                        441906 
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />
                        +91 9673775604
                        
                    </h4>
                </div>
                <div className="mail">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />
                        pranaymeshrammhi26@gmail.com
                        
                    </h4>
                </div>

            </div>
            <div className="right">
                <h4>PERSONAL DETAILS</h4>
                <h5>Date Of Birth : 18 sep 1999</h5>
                <h5>Gender : Male</h5>
                <h5>Nationality :Indian</h5>
                <h5>Marital Status : Single</h5>
                <h5>Languages Known : English Hindi Marathi</h5>

                <div className="social">
                <FaGithub size={30} style={{color:"#fff", marginRight:"2rem" }} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem" }} />
                <FaSkype size={30} style={{color:"#fff", marginRight:"2rem" }} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;