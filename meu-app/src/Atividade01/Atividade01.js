import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
function Atividade01() {
  return (
    <>
      <Letreiro />
      <Relogio />
      <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade01;
