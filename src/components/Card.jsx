/* eslint-disable no-unused-vars */


import React from "react";



function Card(props){

    return (
        <div className="card">
            <img src={props.img} alt="katie-zaferes" />
            <div className="card--stats">
                <img className="card--star" src="src/assets/star.png" alt="star" />
                <span>({props.rating})</span>
                <span> •</span>
                <span>{props.country}</span>
                
            </div>
            <p>{props.title}</p>
            <p><strong>from ${props.rate}</strong> / person</p>
        </div>
    )

}


export default Card