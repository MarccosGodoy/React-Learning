import React from 'react'
import './recepie.css';
const Recepie = ({title,calories,image, ingredients}) => {
    return (
        <div className="recepie">
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt=""></img>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>

        </div>
    )
}

export default Recepie
