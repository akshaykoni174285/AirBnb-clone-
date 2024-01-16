/* eslint-disable no-unused-vars */


import React from "react";



function Card(props){
    var badgeText
    if (props.item.openSpots === 0){
        badgeText="SOLD OUT"

    }
    else if (props.item.location==="Online"){
        badgeText="ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${props.item.coverImg}`} alt={props.item.coverImg} />
            <div className="card--stats">
                <img className="card--star" src="images/star.png" alt="star" />
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount})</span>
                <span> •</span>
                <span>{props.item.location}</span>
                
            </div>
            <p>{props.item.title}</p>
            <p><strong>from ${props.item.price}</strong> / person</p>
        </div>
    )

}


export default Card