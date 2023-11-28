import React, { useState } from 'react';
import './PackingList.css';

function Item({ name, isPacked, onToggle }) {
  const itemClasses = `Item ${isPacked ? 'checked' : ''}`;

  return (
    <li className={itemClasses} onClick={onToggle}>
      <span>{name}</span>
      {isPacked && <span>✓</span>}
    </li>
  );
}

function PackingList() {
  const initialItems = [
    { id: 1, name: 'Banana', isPacked: true },
    { id: 2, name: 'Maçã', isPacked: false },
  ];

  const [items, setItems] = useState(initialItems);

  function handleToggle(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  return (
    <section className='PackingList'>
      <h1>Gabriel Packing List</h1>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            isPacked={item.isPacked}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default PackingList;
