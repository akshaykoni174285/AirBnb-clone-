/* eslint-disable no-unused-vars */


import React from "react";



function Card(props){

    return (
        <div className="card">
            <img src={`/images/${props.coverImg}`} alt={props.coverImg} />
            <div className="card--stats">
                <img className="card--star" src="images/star.png" alt="star" />
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <span> •</span>
                <span>{props.location}</span>
                
            </div>
            <p>{props.title}</p>
            <p><strong>from ${props.price}</strong> / person</p>
        </div>
    )

}


export default Card