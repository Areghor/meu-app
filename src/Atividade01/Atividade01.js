import React from 'react';
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
import './Atividade01.css'; // Importando estilos do componente Atividade01

function Atividade01() {
  return (
    <div className="Atividade01">
      <Letreiro />
      <Relogio />
      <span> <Link to={"/"} className="Atividade01-link">Voltar</Link></span>
    </div>
  );
}

export default Atividade01;
