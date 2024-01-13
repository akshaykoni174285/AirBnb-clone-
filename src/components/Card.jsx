/* eslint-disable no-unused-vars */


import React from "react";



function Card(props){

    return (
        <div className="card">
            <img src="src/assets/katie-zaferes.png" alt="katie-zaferes" />
            <div className="card--stats">
                <img className="card--star" src="src/assets/star.png" alt="star" />
                <span></span>
                <span> •</span>
                <span>USA</span>
                
            </div>
            <p>life lessons with katie zaferes</p>
            <p><strong>from $136</strong> / person</p>
        </div>
    )

}


export default Card