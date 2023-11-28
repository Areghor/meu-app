import imgMan from './images/man.png';
import './ToDoList.css';


const person = {
  name: "Gabriel Zampieri",
  theme : {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function ToDoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className='avatar'
        src={imgMan}
        alt="Gabriel Zampieri"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default ToDoList;
