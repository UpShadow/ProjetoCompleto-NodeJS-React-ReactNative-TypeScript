import { useState } from "react";

function App() {
  //Declarando os estados
  const [nome, setNome] = useState(''); // useState sendo um texto
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');  

  const[user, setUser] = useState({}); // useState sendo um objeto

  // exemplo do useState sendo um array: const[usuarios, setUsuarios] =  useState([]); esse array pode começar preenchido tambem.
  // exemplo do useState sendo um numero: const [idade, setIdade] = useState(0); 

  function handleRegister(e) {
    e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem
    
    alert('Usuario registrado com sucesso!');
    setUser({ //objeto user
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return(
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa</label> <br/>
        <input 
          placeholder="Digite seu nome" //Mensagem exibida no input quando está vazio
          value={nome} //valor que eu tenho dentro do input
          // esse "e" dentro da função anonima é abreviação de event
          onChange={ (e) => setNome(e.target.value)}
        /> <br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <div>
        <span>Bem vindo: {user.nome}</span> <br/>
        <span>Idade: {user.idade}</span> <br/>
        <span>Email: {user.email}</span> <br/>
      </div>
    </div>
  );
}

export default App;
