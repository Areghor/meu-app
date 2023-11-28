import React, { useState } from 'react';
import imgMan from './images/man.png';
import './ToDoList.css';

const person = {
  name: 'Victor Hugo',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

function ToDoList() {
  const [todos, setTodos] = useState([
    'Improve the videophone',
    'Prepare aeronautics lectures',
    'Work on the alcohol-fuelled engine',
  ]);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = newTodos[index] + ' ✓';
    setTodos(newTodos);
  };

  return (
    <div className='ToDoList' style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className='avatar' src={imgMan} alt='Victor Hugo' />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
