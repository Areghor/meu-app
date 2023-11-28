import React from 'react';
import Carta from './Carta';
import './Mesa.css';

function Mesa(props) {
    return(
        <div id="tabuleiro">
            {props.cards.map((card,index)=>{
                return(<Carta handleFlip={props.handleFlip} key={index} card={card}></Carta>);               
            })}
        </div>
    );
}

export default Mesa;