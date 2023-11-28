import React from 'react';
import './Carta.css';

function Carta(props) {
    return(
        <div id={props.card.id} className={`card ${props.card.flip?"flip":""}`} onClick={props.handleFlip}>
            <div className="card_front">
                <img className="card" alt={props.card.icon} src={require(`./images/${props.card.icon}.png`)} />
            </div>
            <div className="card_back">
                <h2>{"</>"}</h2>
            </div>
        </div>
    );
}
export default Carta;