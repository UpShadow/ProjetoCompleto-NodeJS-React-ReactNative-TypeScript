import React, { useEffect, useState } from "react";
import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts
// Para visualizar melhor no navegador essa api usar a extensão JSON Viewer

function App() {
  const [nutri, setNutri] = useState([]);
  
  useEffect(() => {

    function loadApi(){ // Função que vai carregar nossa API
      // No javascript sem usar nenhuma biblioteca como AXIOS, nos temos o fetch para fazer as requisições http
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'; // Atribuindo nossa url para uma variavel let, para ficar mais simples no fetch, se não: fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
     
      fetch(url) //vai na url deu certo a requisição esse fetch cai no then
      .then((r) => r.json()) //o then recebe o response(r) e transformamos esse r em json para podermos trabalhar com ele, esse then tbm traz uma promise then
      .then((json) => { // aqui já temos todo nosso conteudo da API em json
        console.log(json);
        setNutri(json); //atribuindo os dados da api em formato json para nossa useState nutris
      })
    }

    loadApi(); // Chamando a função loadApi

  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa"></img> {/* sempre em img colocar alt(texto alternativo) ajuda na acessibilidade muito essencial */}
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
