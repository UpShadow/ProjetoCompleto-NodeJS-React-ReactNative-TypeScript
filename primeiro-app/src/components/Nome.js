

// function Nome(props) { // posso usar assim e resgatar com props.aluno 
//mas tbm posso desestruturar e pegar apenas uma informação do props:
function Nome({ aluno, idade }) {
  return(
    <span>Bem-vindo: {aluno} -  Idade: {idade} anos</span>
  )
}

export default Nome;