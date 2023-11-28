import './Botao.css';
function Botao( {label, classe, funcao, tamanho}) {
  classe += tamanho != null ? '-'+tamanho : '';
  
  return (
    <button className={classe} onClick={() => funcao(label)}>
      {label}
    </button>
  );
}

export default Botao;
