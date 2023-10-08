import React from 'react';

export default function Comentarios(props) {
  const imagem = require(`./img/foto-${props.foto}.png`);

  return (
    <div className='conteiner'>
      <div className='comentarios' >
        <img src={imagem} alt={props.foto} />
        <div className='comentarios-textos'>
          <h3>{props.nome} em {props.pais}</h3>
          <p>{props.cargo} em <strong>{props.empresa}</strong></p>

          <p>"{props.depoimento}"</p>
        </div>
      </div>
    </div>
  );
};   