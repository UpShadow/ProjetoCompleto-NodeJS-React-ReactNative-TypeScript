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
// MANIPULANDO FORMULARIOS

// import { useState } from "react";

// function App() {
//   //Declarando os estados
//   const [nome, setNome] = useState(''); // useState sendo um texto
//   const [email, setEmail] = useState('');
//   const [idade, setIdade] = useState('');  

//   const[user, setUser] = useState({}); // useState sendo um objeto

//   // exemplo do useState sendo um array: const[usuarios, setUsuarios] =  useState([]); esse array pode começar preenchido tambem.
//   // exemplo do useState sendo um numero: const [idade, setIdade] = useState(0); 

//   function handleRegister(e) {
//     e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem
    
//     alert('Usuario registrado com sucesso!');
//     setUser({ //objeto user
//       nome: nome,
//       idade: idade,
//       email: email
//     })
//   }

//   return(
//     <div>
//       <h1>Cadastrando usuario</h1>

//       <form onSubmit={handleRegister}>
//         <label>Nome:</label> <br/>
//         <input 
//           placeholder="Digite seu nome" //Mensagem exibida no input quando está vazio
//           value={nome} //valor que eu tenho dentro do input
//           // esse "e" dentro da função anonima é abreviação de event
//           onChange={ (e) => setNome(e.target.value)}
//         /> <br/>

//         <label>Email:</label> <br/>
//         <input 
//           placeholder="Digite seu email"
//           value={email}
//           onChange={ (e) => setEmail(e.target.value)}
//         /> <br/>

//         <label>Idade:</label> <br/>
//         <input 
//           placeholder="Digite sua idade"
//           value={idade}
//           onChange={ (e) => setIdade(e.target.value)}
//         /> <br/> <br/>
        
//         <button type="submit">Registrar</button>
//       </form>

//       <br/><br/>

//       <div>
//         <span>Bem vindo: {user.nome}</span> <br/>
//         <span>Idade: {user.idade}</span> <br/>
//         <span>Email: {user.email}</span> <br/>
//       </div>
//     </div>
//   );
// }

// export default App;
//#######################################################################################################################

//#######################################################################################################################
// PRATICANDO - lista, array e seus estados.



//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################

//#######################################################################################################################
//

//#######################################################################################################################