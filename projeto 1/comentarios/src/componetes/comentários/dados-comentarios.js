import React from "react";
import Comentarios from './Comentarios.js';

function dados(){
    return(
        <div>
            <Comentarios
        foto="shawn"
        nome="Shawn Wang"
        pais="Singapur"
        empresa="Amazon"
        cargo="Engeharia de sotware"
        depoimento ="Mudar de carreira é assustador. Só ganhei a confiança de que poderia codificar trabalhando nas centenas de horas de aulas gratuitas no freeCodeCamp. Em um ano, eu tinha um emprego de seis dígitos como engenheiro de software. O freeCodeCamp mudou minha vida." />
      <Comentarios
        foto="sarah"
        nome="Sarah Chima"
        pais="Nigeria"
        empresa="ChatDesk"
        cargo="Engenharia de software"
        depoimento="freeCodeCamp foi a porta de entrada para minha carreira como desenvolvedor de software. O currículo bem estruturado levou meu conhecimento de programação de um nível totalmente iniciante a um nível muito confiante. Era tudo que eu precisava para conseguir meu primeiro emprego de desenvolvedor em uma empresa incrível." />
      <Comentarios
        foto="emma"
        nome="Emma Bostion"
        pais="Suécia"
        empresa="Spotify"
        cargo="Engenharia de software"
        depoimento="Sempre tive dificuldade em aprender JavaScript. Eu fiz muitos cursos, mas o curso freeCodeCamp foi o que ficou. Estudar JavaScript, bem como estruturas de dados e algoritmos no freeCodeCamp, me deu as habilidades e a confiança de que precisava para conseguir meu emprego dos sonhos como engenheiro de software no Spotify." />
        </div>
    )
}

export default dados;
