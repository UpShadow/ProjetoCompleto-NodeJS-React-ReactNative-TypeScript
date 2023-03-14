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

// import { useState } from "react";

// function App() {
//   const [input, setInput] = useState('');
//   const [tarefa, setTarefas] = useState([
//     'Pagar a conta de luz',
//     'Estudar React JS'
//   ]);

//   function handleRegister(e) {
//     e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem

//     //...tarefa é spread operator
//     setTarefas([...tarefa, input]);
//     setInput('');
//   }

//   return(
//     <div>
//       <h1>Cadastrando tarefa</h1>

//       <form onSubmit={handleRegister}>
//         <label>Nome da tarefa:</label> <br/>
//         <input 
//           placeholder="Digite uma tarefa"
//           value={input}
//           onChange={ (e) => setInput(e.target.value)}
//         /> <br/> <br/>
//         <button type="submit">Registrar</button>
//       </form>

//       <br/><br/>

//       <ul>
//         {/* essa é a estrutura desse map {tarefa.map( tarefa => () )}  */}
//         {/* esta sendo usada () direto ao invez de uma chamada de função pois queremos retornar um html/jsx direto na tela */}
//         {tarefa.map( tarefa => ( // Usando map para percorrer nosso array de tarefas
//           // nota que dentro do li ela possui a prop key, isso é necessario para que não retorne um erro, pois o react precisa de uma key para cada elemento da tabela
//           <li key={tarefa}>{tarefa}</li>
//         ))} 
//       </ul>
//     </div>
//   );
// }

// export default App;
//#######################################################################################################################

//#######################################################################################################################
// CONHECENDO UseEffect (ciclo de vida)

// pode ser quando ela nasce, antes dela morrer e durante.

// import { useEffect, useState } from "react";

// function App() {
//   const [input, setInput] = useState('');
//   const [tarefa, setTarefas] = useState([
//     'Pagar a conta de luz',
//     'Estudar React JS'
//   ]);

//   useEffect(() => {
//     const tarefaStorage = localStorage.getItem('@tarefa'); //Busco no localStore pelos itens cadastrados

//     if(tarefaStorage) { // caso tenha algum item no localStorege
//       setTarefas(JSON.parse(tarefaStorage)); // jogo do localStorage para o tarafas pelo setTarefas, mas preciso converter de volta em array, pois na hora de jogar pro localStorage eu converti em string
//     }
    
//   }, []);

//   // useEffect com o [] vazio ele é sempre chamado após a aplicação ser carregada por completo, então ele é a ultima coisa executada.
//   // com [tarefa] dentro, ele é executado sempre que ocorrer uma alteração em tarefa, como se tarefa fosse o gatilho de execução do useEffect
//   useEffect(() => {
//     localStorage.setItem('@tarefa', JSON.stringify(tarefa)) //A propriedade localStorage permite acessar um objeto Storage local.
//   }, [tarefa]);  

//   function handleRegister(e) {
//     e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem

//     //...tarefa é spread operator
//     setTarefas([...tarefa, input]);
//     setInput('');
//   }

//   return(
//     <div>
//       <h1>Cadastrando tarefa</h1>

//       <form onSubmit={handleRegister}>
//         <label>Nome da tarefa:</label> <br/>
//         <input 
//           placeholder="Digite uma tarefa"
//           value={input}
//           onChange={ (e) => setInput(e.target.value)}
//         /> <br/> <br/>
//         <button type="submit">Registrar</button>
//       </form>

//       <br/><br/>

//       <ul>
//         {/* essa é a estrutura desse map {tarefa.map( tarefa => () )}  */}
//         {/* esta sendo usada () direto ao invez de uma chamada de função pois queremos retornar um html/jsx direto na tela */}
//         {tarefa.map( tarefa => ( // Usando map para percorrer nosso array de tarefas
//           // nota que dentro do li ela possui a prop key, isso é necessario para que não retorne um erro, pois o react precisa de uma key para cada elemento da tabela
//           <li key={tarefa}>{tarefa}</li>
//         ))} 
//       </ul>
//     </div>
//   );
// }

// export default App;
//#######################################################################################################################