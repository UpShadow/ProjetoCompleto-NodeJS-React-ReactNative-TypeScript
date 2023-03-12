//#######################################################################################################################
// Entendendo props e componentes

// arquivo Nome.js
//Aqui temos o componente nome que está recebendo uma props e desconstruindo ela em aluno e idade
// ela retorna um jsx nesse return()
// function Nome({ aluno, idade }) {
//     return(
//       <span>Bem-vindo: {aluno} -  Idade: {idade} anos</span>
//     )
//   }
  
//   export default Nome;

// //em outro arquivo chamado App.js
// import Nome from './components/Nome'; //importando nosso componente Nome para o componente App 

// componente sempre com a primeira letra maiúscula aqui e no nome do arquivo: App.js
// function App() {
       // aqui dentro temos um carinha chamado jsx então temos um return
//     return (
//         <div>
//             <h1>Componente App</h1>
//             {/* Aqui estamos chamando o componente nome e passando uma propriedade aluno="Carlos" e idade="22" */}
//             <Nome aluno="Carlos" idade={22}/>             
//         </div>
//     )
// }

// Esse exemplo acima mostra como é a passagem de uma props(propriedade) e que podemos desconstruir ela:
//function Nome({ aluno, idade }) assim é desconstruindo
//function Nome(props) assim é sem desconstruir ai para acessar as props usaria props.aluno e props.idade
//#######################################################################################################################

//#######################################################################################################################
//Trabalhando com useState

//Componente Nome no arquivo Nome.js
// function Nome({ aluno, idade }) {
//     return(
//       <span>Bem-vindo: {aluno} -  Idade: {idade} anos</span>
//     )
//   }
  
// export default Nome;

// import { useState } from "react"; //importanto nosso hook

// import Nome from "./components/Nome"; //importando o nome que é um componente para nosso componente App

// Componente App no arquivo App.js
// function App() {
//   const [aluno, setAluno] = useState('Sujeito Programador'); //criando o hook, deve ser passado duas coisas, nome desse estado e o nome da função que troca o valor desse estado. aluno e setAluno

//   function handleChangeName(nome) { // função que é chamada no evento onClick do nosso botão 
//     setAluno(nome); // aqui dentro da função chamamos a função do useState que declaramos para alterar o valor de aluno
//   }
//   return(
//     <div>
//       <h1>Componente App</h1> <br/>
//       <h2>Olá: {aluno}</h2>
//       <button onClick={ () => handleChangeName('Carlos Eduardo') }> 
//         Mudar nome
//       </button>
//     </div>
//   );
// }

// export default App;
//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################