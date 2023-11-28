// Contador.js
import React, { useReducer } from 'react';
import ContadorPerson from './ContadorPerson';
import imgMan from './images/man.png';
import imgWoman from './images/woman.png';
import imgRefresh from './images/refresh.png';
import './Contador.css';

const initialState = { manCount: 0, womanCount: 0, count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'REFRESH':
      return initialState;
    case 'ADD_COUNT':
      return { ...state, count: state.count + 1 };
    case 'MINUS_COUNT':
      return { ...state, count: state.count - 1 };
    case 'ADD_MAN_COUNT':
      return { ...state, manCount: state.manCount + 1, count: state.count + 1 };
    case 'MINUS_MAN_COUNT':
      return { ...state, manCount: state.manCount - 1, count: state.count - 1 };
    case 'ADD_WOMAN_COUNT':
      return { ...state, womanCount: state.womanCount + 1, count: state.count + 1 };
    case 'MINUS_WOMAN_COUNT':
      return { ...state, womanCount: state.womanCount - 1, count: state.count - 1 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='Contador-contador-full'>
      <div className='Contador-header'>
        <h1 className='Contador-title'>Total</h1>
        <button className='Contador-button' onClick={() => dispatch({ type: 'REFRESH' })}>
          <img className='Contador-button-img' src={imgRefresh} alt="Refresh" />
        </button>
      </div>
      <p className='Contador-contador'>{state.count}</p>

      {/* body div */}
      <div className='Contador-body'>
        {/* man */}
        <ContadorPerson
          imgSrc={imgMan}
          onAdd={() => dispatch({ type: 'ADD_MAN_COUNT' })}
          onMinus={() => dispatch({ type: 'MINUS_MAN_COUNT' })}
          count={state.manCount}
        />

        {/* woman */}
        <ContadorPerson
          imgSrc={imgWoman}
          onAdd={() => dispatch({ type: 'ADD_WOMAN_COUNT' })}
          onMinus={() => dispatch({ type: 'MINUS_WOMAN_COUNT' })}
          count={state.womanCount}
        />
      </div>
    </div>
  );
}

export default Contador;
