/* eslint-disable no-unused-vars */

import React from 'react';
import Grid from "/photo-grid.png"
function Hero(){
    return(
        <div className="hero">
            <div className="hero-grid">
            <img  src={Grid} alt="airbnb grid" />
            </div>

        
            <h1 className="hero-heading">Online Experience</h1>
            <h4>join unique interactive led by one-of-kind-hosts-all without leaving home</h4>
        </div>
            

        
    )
}

export default Hero