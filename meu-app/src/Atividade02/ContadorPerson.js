// ContadorPerson.js
import React from 'react';
import imgPlus from './images/plus.png';
import imgMinus from './images/minus.png';

function ContadorPerson({ imgSrc, onAdd, onMinus, count }) {
  return (
    <div className='Contador-person'>
      <img src={imgSrc} alt="Person" />
      <div className='Contador-buttons'>
        <button className='Contador-button' onClick={onAdd}>
          <img className='Contador-button-img' src={imgPlus} alt="Plus" />
        </button>
        <button className='Contador-button' onClick={onMinus}>
          <img className='Contador-button-img' src={imgMinus} alt="Minus" />
        </button>
      </div>
      <h1>Total</h1>
      <p className='Contador-contador'>{count}</p>
    </div>
  );
}

export default ContadorPerson;
