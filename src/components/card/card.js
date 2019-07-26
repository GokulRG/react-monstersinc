import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=320x320`} />
            <h2 key={props.monster.id}> {props.monster.name} </h2>
            <p> {props.monster.email} </p>
        </div>
    );
};

export default Card;