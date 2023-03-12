import { useState } from "react";

function App() {
  //Declarando os estados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');  

  function handleRegister(e) {
    e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem
    alert('Entrou no register')
  }

  return(
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label> <br/>
        <input 
          placeholder="Digite seu nome" //Mensagem exibida no input quando está vazio
          value={nome} //valor que eu tenho dentro do input
          // esse "e" dentro da função anonima é abreviação de event
          onChange={ (e) => setNome[e.target.value]}
        /> <br/>

        <label>Email:</label> <br/>
        <input 
          placeholder="Digite seu email"
          value={email}
          onChange={ (e) => setEmail[e.target.value]}
        /> <br/>

        <label>Idade:</label> <br/>
        <input 
          placeholder="Digite sua idade"
          value={idade}
          onChange={ (e) => setIdade[e.target.value]}
        /> <br/> <br/>
        
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <div>
        <span>Bem vindo: Carlos</span> <br/>
        <span>Idade: 22</span> <br/>
        <span>Email: CarlosCorreia1002@gmail.com</span> <br/>
      </div>
    </div>
  );
}

export default App;

