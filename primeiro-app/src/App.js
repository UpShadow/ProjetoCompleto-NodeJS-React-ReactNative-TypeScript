import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefa, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  useEffect(() => {
    const tarefaStorage = localStorage.getItem('@tarefa'); //Busco no localStore pelos itens cadastrados

    if(tarefaStorage) { // caso tenha algum item no localStorege
      setTarefas(JSON.parse(tarefaStorage)); // jogo do localStorage para o tarafas pelo setTarefas, mas preciso converter de volta em array, pois na hora de jogar pro localStorage eu converti em string
    }
    
  }, []);

  // useEffect com o [] vazio ele é sempre chamado após a aplicação ser carregada por completo, então ele é a ultima coisa executada.
  // com [tarefa] dentro, ele é executado sempre que ocorrer uma alteração em tarefa, como se tarefa fosse o gatilho de execução do useEffect
  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefa)) //A propriedade localStorage permite acessar um objeto Storage local.
  }, [tarefa]);  

  function handleRegister(e) {
    e.preventDefault(); // previne de atualizar o formulario, e os dados sumirem

    //...tarefa é spread operator
    setTarefas([...tarefa, input]);
    setInput('');
  }

  return(
    <div>
      <h1>Cadastrando tarefa</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label> <br/>
        <input 
          placeholder="Digite uma tarefa"
          value={input}
          onChange={ (e) => setInput(e.target.value)}
        /> <br/> <br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {/* essa é a estrutura desse map {tarefa.map( tarefa => () )}  */}
        {/* esta sendo usada () direto ao invez de uma chamada de função pois queremos retornar um html/jsx direto na tela */}
        {tarefa.map( tarefa => ( // Usando map para percorrer nosso array de tarefas
          // nota que dentro do li ela possui a prop key, isso é necessario para que não retorne um erro, pois o react precisa de uma key para cada elemento da tabela
          <li key={tarefa}>{tarefa}</li>
        ))} 
      </ul>
    </div>
  );
}

export default App;
