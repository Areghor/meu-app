import { Link } from "react-router-dom";
import JogoDaMemoria from './JogoDaMemoria';
import './Atividade05.css';

function Atividade05() {
  return (
    <>
      <h1 className="title">Atividade05</h1>
      <JogoDaMemoria />
      <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade05;
