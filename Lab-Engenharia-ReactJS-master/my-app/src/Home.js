import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>  
          <li>
            <Link to={"/Atividade01"}>Letreiro e Relógio</Link>
          </li>
          <li>
            <Link to={"/Atividade02"}>Contador</Link>
          </li>
          <li>
            <Link to={"/Atividade03"}>Componentes Diversos</Link>
          </li>
          <li>
            <Link to={"/Atividade04"}>Calculadora</Link>
          </li>
          <li>
            <Link to={"/Atividade05"}>Jogo da Memoria</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
