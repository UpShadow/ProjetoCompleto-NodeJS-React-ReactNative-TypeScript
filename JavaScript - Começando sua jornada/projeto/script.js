//###################################################################################################################################################################################
//ENTENDO JAVASCRIPT

// Oque é ?
// É uma linguagem de programação
// Torna o nosso projeto dinamico
// É possivel com ele criar aplicações mobile (android, IOS), desenvolver back-end(servidores, API Rest).

// alert("Aprendendo Javascript na prática"); // instrui o navegador a exibir uma caixa de diálogo com uma mensagem opcional e aguardar até que o usuário feche a caixa de diálogo.

// var nome = "Sujeito Programador";

// // é possivel também ir no console manualmente e digitar apenas nome e ele retorna o valor de nome.
// console.log(nome); // Exibe uma mensagem no console do navegador.

// nome = "Curso sujeito Programador";
// console.log(nome);
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//MANIPULAR VARIAVEIS pt1

// O que é uma variável?
// Uma variável é um contêiner para um valor, como um número que podemos usar em uma soma ou uma string que podemos usar como parte de uma frase.

// var curso = "JavaScript"; // curso recebendo uma string ou seja um texto
// console.log(curso);

// curso = "PHP"; // Como nesse exemplo podemos alterar o valor da variavel
// console.log(curso);

// curso = 150; // E como a variavel foi criada como var pode ser alterada de string para number
// console.log(curso);

// curso = "Curso JavaScript";
// alert(curso); // Utilizando alert e a mensagem exibida é o conteudo da variavel curso
// alert(curso + ' Sujeito Programador!');

// Fazendo calculos:

// var valor1 = 7;
// var valor2 = 5;

// var soma = valor1 + valor2; // Declarando uma variavel chamada soma e fazendo ela receber o valor da soma da variavel valor1 mais valor2

// //Calculo de média
// soma = (valor1 + valor2) / 2;

// alert('Media do alubno X: ' + soma); // concatenando texto e variavel com resultado da media e exibindo no alert

//MANIPULAR VARIAVEIS pt2

//Pontos importantes na hora da decleração de variaveis em javascript
// São case sensitive: 
//Case-sensitive é um anglicismo que se refere a um tipo de análise tipográfica da informática. Em língua portuguesa, significa algo como "sensível à caixa das letras" ou "sensível a maiúsculas e minúsculas".

// var nome = "Carlos";
// console.log(nome);
// console.log(Nome); //Isso gera um erro: Uncaught ReferenceError: Nome is not defined, pois essa variavel Nome com o N maiuscúlo não existe pois acima a gente declarou nome com n minuscúlo e o javascript faz esse tipo de distinção(Case-sensitive) 

// var Nome = "Henrique";
// console.log(Nome); //Agora não geraria mais o erro, o retoro seria Henrique, e caso o console.log(nome) retornaria Carlos.

// Keyword ou Palavra-chave são palavras reservadas e o javascript possui algumas:
// por exemplo var é uma palavra usada para declaração da variavel portanto o nome da variavel não pode ser var: var var = ("alguma coisa"); isso não pode ser feito
// function também é uma keyword pois é utilizado para criar funções
// class também

// var val1 = 10;
// var val2 = 5;
// console.log("val1 = " + val1);
// console.log("val2 = " + val2);
// console.log("Soma de val1+val2 = " + (val1 + val2)); //preciso colocar parênteses nessa conta pois caso eu deixe sem o javascript nesse caso vai retornar a concatenação de val1 + val2 resultando em 105 e não em 15 como era o esperado
// console.log("Multiplicação de val1*val2 = " + (val1 * val2));
// console.log("Divisão de val1/val2 = " + (val1 / val2));
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//COMANDOS DE ENTRADA

// alert("TEST") 

// como pedir ao usuario digitar algo por meio do prompt de comando.
// var nome = prompt("Qual seu nome?");
// var sobrenome = prompt("Qual seu sobrenome?");

// // console.log(nome); 
// console.log("Olá " + nome + " " + sobrenome);

// //Document.write() Escreve texto em um documento.
// document.write("<h1>Bem vindo " + nome + "</h1>"); //A interface Document representa qualquer página da Web carregada no navegador e serve como um ponto de entrada para o conteúdo da página da Web, que é a árvore DOM.

// document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='Foto do Steve'/>")
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//ENTENDENDO FUNÇÕES pt1

// O método document getElementById() retorna um objeto Element que representa o elemento cuja propriedade id corresponde à string especificada. 
// Como os IDs de elemento devem ser exclusivos se especificados, eles são uma maneira útil de obter acesso a um elemento específico rapidamente.
// var area = document.getElementById('area');

// function entrar() {
//     // alert("Clicou no botão!")
//     var nome = prompt("Digite seu nome:");

//     if(nome == '' || nome == null) {
//         alert("Ops algo deu errado!");
//         area.innerHTML = "Clique no botão para acessar...";
//     }
//     else {
//         area.innerHTML = "Bem vindo " + nome + " "; //A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes.
        
//         let botãoSair = document.createElement("button"); //criando um elemento document que é um botão 
//         botãoSair.innerText = "Sair da conta"; //atribuindo um texto para esse nosso elemento button
//         area.appendChild(botãoSair); // Aplicando o botãoSair no nosso html
//         botãoSair.onclick = sair; //atribuindo onclick que chama a função sair ao nosso botão de sair
//     }
// }

// function sair() {
//     alert("Até mais!");
//     area.innerHTML = "Você saiu!";
// }
// //###################################################################################################################################################################################

// //###################################################################################################################################################################################
// //ENTENDENDO FUNÇÕES pt2

// function mediaAluno(nota1, nota2) { // calcula a media do Aluno
//     var media = (nota1 + nota2) / 2;

//     if(media >= 7)
//         console.log("Aluo aprovado com a média: " + media)
//     else if(media < 7)
//         console.log("Aluno reprovado com a média: " + media)
// }

// console.log(mediaAluno(7,6)); // calculando a media que tenha retorno reprovado
// console.log(mediaAluno(8,7.5)); //calculando a media que tenha retorno aprovado

// function aluno(nome, curso) { //Função aluno que recebe como parâmetro duas variaveis e retora uma mensagem 
//     var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso + ".";
//     console.log(mensagem)
// }

// console.log(aluno("Carlos","JavaScript")); //chamando a fução aluno e passado os parametros necessarios.
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//TRABALHANDO COM ARRAYS

// var lista = ['Carlos', 'Natalia', 'Maria', 2023]; //criado uma lista(array) com alguns dados
// console.log(lista); //retora no console toda a estrutura da lista
// console.log(lista[1]); // retorna o elemento da posição 1 da lista
// console.log(lista.length); // retorna o tamanho da lista, isso é baseado na quatidade de itens dentro da lista

//###################################################################################################################################################################################

//###################################################################################################################################################################################
//MANIPULANDO ARRAYS

var lista = ['Carlos', 'Natalia', 'Maria', 2023]; //criado uma lista(array) com alguns dados
console.log(lista.indexOf('Carlos')); //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

console.log(lista.indexOf('Carlos Eduardo')); // retora -1 pois não foi encontrado

lista[0] = 'Carlos Eduardo'; //alterado o conteudo da posição 0 que antes era 'Carlos' e agora passou a ser 'Carlos Eduardo' 

console.log(lista.indexOf(2023)); //Usado o metodo indexOf para procurar 2023 no array lista, ele retora a posição 3.



//###################################################################################################################################################################################
