import React from 'react';

const PageButton = props => {
    console.log(`Page Button Props" ${props}`);
    return (
        <div>
            <button onClick ={() => {props.prevPageToggle()}}> Previous Page </button>
            <button onClick={() => {props.nextPageToggle()}}> Next Page </button>
        </div>
        
    )
}

export default PageButton;