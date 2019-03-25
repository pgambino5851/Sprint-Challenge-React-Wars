import React from 'react';
import "./character.css";

const Character = props => {
    // console.log(props.starwarsChar.films);
return (
    <div className ="character">
        <h2>{props.starwarsChar.name}</h2>
        <p>Height: {props.starwarsChar.height} space-inches</p>
        <p>Gender: {props.starwarsChar.gender}</p>
        <p>Hair: {props.starwarsChar.hair_color}</p>
        <p>Weight: {props.starwarsChar.weight}</p>
        <p>Skin: {props.starwarsChar.skin_color}</p>
        {/* <p>Films: {props.starwarsChar.films.map(film => <p> {film.charAt(film.length-2)} </p>)} </p> */}
    </div>
    )
}

export default Character;