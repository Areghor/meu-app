import React from 'react';
import PropTypes from 'prop-types';
import './Botao.css';

function Botao({ label, classe, funcao, tamanho }) {
  const classes = `botao ${classe} ${tamanho === '2' ? 'botao-wide' : ''}`;

  return (
    <button className={classes} onClick={() => funcao(label)}>
      {label}
    </button>
  );
}

Botao.propTypes = {
  label: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
  tamanho: PropTypes.string,
};

Botao.defaultProps = {
  tamanho: '1',
};

export default Botao;
