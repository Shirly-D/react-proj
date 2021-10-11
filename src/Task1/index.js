import React from "react";
import data from './data.js';

function CardList() {
    return data.map((cardData) => 
    <li key={cardData} className={cardData.className}>
        <p>{cardData.icon}</p>
        <p>{cardData.name}</p>
        <p>${cardData.price}</p>
        <p>Increased by {cardData.increase}%</p>
    </li>

    )
}



export default CardList;