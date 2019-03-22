import React from 'react';
import Character from './Character';
import './character-list.css'

const CharacterList = props => {
    // console.log(props.starwarsChars.forEach(char => console.log(char.name)));
    console.log(props.starwarsChars)
    return (
        
        <div className='character-list'>
        {props.starwarsChars.map(char => {
            return (
                <Character
                key = {Date.now() * Math.random()}
                starwarsChar = {char} />
                )}
            )}
        </div>
    )
}

export default CharacterList;