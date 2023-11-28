import { Link } from "react-router-dom";
import Contador from "./Contador";
import './Atividade02.css';

function Atividade02() {
  return (
    <>
      <h1 className="title">Atividade02</h1>
      <Contador />
      <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade02;
