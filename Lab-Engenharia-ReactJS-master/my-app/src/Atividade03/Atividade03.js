import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import './Atividade03.css';
import ToDoList from "./ToDoList";
import PackingList from "./PackingList";

function Atividade03() {
  return (
    <>
      <h1 className="title">Atividade02</h1>
      <h2>Gallery</h2>
      <Gallery />
      <h2>ToDoList</h2>
      <ToDoList />
      <h2>PackingList</h2>
      <PackingList />
      <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade03;
