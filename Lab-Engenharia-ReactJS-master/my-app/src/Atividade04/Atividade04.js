import { Link } from "react-router-dom";
import Calculadora from "./Calculadora";
function Atividade04() {
  return (
    <>
        <Calculadora />
        <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade04;
