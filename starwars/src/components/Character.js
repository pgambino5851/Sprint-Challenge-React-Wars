import React from 'react';
import "./character.css";

const Character = props => {
    // console.log(props.starwarsChar.films);
return (
    <div className ="character">
        <p>Name: {props.starwarsChar.name}</p>
        <p>Height: {props.starwarsChar.height}</p>
        <p>Gender: {props.starwarsChar.gender}</p>
        {/* <p>Films: {props.starwarsChar.films.map(film => <p> {film.charAt(film.length-2)} </p>)} </p> */}
    </div>
    )
}

export default Character;