import "./Pricecard.css";
import {Link} from "react-router-dom";
import React from 'react'

const pricecard = () => {
  return (
   <div className="pricing">
    <div className="card-container">
   
   <div className="card">
        <h4>-Business-</h4>
        <span className="bar"></span>
        <p className="btc">$ 300</p>
        <p>- 5 Days-</p>
        <p>- 8 Pages-</p>
        <p>- Featured -</p>
        <p>- Responsive -</p>
        <Link to="/contact" className="btn btn_card">Purchase Now</Link>
      
    </div>
    <div className="card">
        <h4>-Business-</h4>
        <span className="bar"></span>
        <p className="btc">$ 300</p>
        <p>- 5 Days-</p>
        <p>- 8 Pages-</p>
        <p>- Featured -</p>
        <p>- Responsive -</p>
        <Link to="/contact" className="btn btn_card">Purchase Now</Link>
      
    </div>
    <div className="card">
        <h4>-Business-</h4>
        <span className="bar"></span>
        <p className="btc">$ 300</p>
        <p>- 5 Days-</p>
        <p>- 8 Pages-</p>
        <p>- Featured -</p>
        <p>- Responsive -</p>
        <Link to="/contact" className="btn btn_card">Purchase Now</Link>
      
    </div>
</div>
</div>
  )
}

export default pricecard
