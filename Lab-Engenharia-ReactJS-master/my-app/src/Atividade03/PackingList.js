import './PackingList.css';


function Item ({ name, isPacked }) {
  return (
    <li className='Item'>
      {isPacked ? name + '✓' : name}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Gabriel Packing List</h1>
      <ul>
        <Item 
          isPacked={true}
          name = "Banana"
        />
        <Item 
          isPacked={false}
          name = "Maça"
        />
      </ul>
    </section>
  );
}

export default PackingList;
