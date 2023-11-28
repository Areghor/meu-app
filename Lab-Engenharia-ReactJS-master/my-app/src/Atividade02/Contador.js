import React, { useState } from 'react';
import imgMan from './images/man.png';
import imgWoman from './images/woman.png';
import imgRefresh from './images/refresh.png';
import imgPlus from './images/plus.png';
import imgMinus from './images/minus.png';
import './Contador.css';

function Contador () {
  const [manCount, setManCount] = useState(0);
  const [womanCount, setWomanCount] = useState(0);
  const [count, setCount] = useState(0);
 

  function refreshCount() {
    setCount(0);
    setManCount(0);
    setWomanCount(0);
  }
  
  function addCount() {
    setCount(count + 1)
  }
  
  function minusCount() {
    setCount(count - 1)
  }
  
  function addManCount() {
    setManCount(manCount + 1);
    addCount();
  }

  function minusManCount() {
    setManCount(manCount - 1);
    minusCount();
  }
  
  function addWomanCount() {
    setWomanCount(womanCount + 1);
    addCount();
  }
  
  function minusWomanCount() {
    setWomanCount(womanCount - 1);
    minusCount();

  }

  return (  
  <div className='Contador-contador-full'>
    <div className='Contador-header'> 
      <h1 className='Contador-title'>Total</h1>
      <button className='Contador-button' onClick={refreshCount}>
        <img className='Contador-button-img' src={imgRefresh} />
      </button>
    </div>
    <p className='Contador-contador'>{count}</p>
    
    {/* body div */}
    <div className='Contador-body'>
      {/* man */}
      <div className='Contador-person'>
        <img src={imgMan} />
        <div className='Contador-buttons'>
          <button className='Contador-button' onClick={addManCount}>
              <img className='Contador-button-img' src={imgPlus}/>
          </button>
          <button className='Contador-button' onClick={minusManCount}>
              <img className='Contador-button-img' src={imgMinus}/>
          </button>
        </div>
        <h1>Total</h1>
        <p className='Contador-contador'>{manCount}</p>
      </div>


      {/* woman */}
      <div  className='Contador-person'> 
        <img src={imgWoman}/>
        <div className='Contador-buttons'>
          <button className='Contador-button' onClick={addWomanCount}>
              <img className='Contador-button-img' src={imgPlus}/>
          </button>
          <button className='Contador-button' onClick={minusWomanCount}>
              <img className='Contador-button-img' src={imgMinus}/>
          </button>
        </div>
        <h1>Total</h1>
        <p className='Contador-contador'>{womanCount}</p>
      </div>

    </div>
  
  
  </div>
  );

}


export default Contador;
