//Seção 2: JavaScript - Começando sua jornada
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

// var lista = ['Carlos', 'Natalia', 'Maria', 2023]; // criado uma lista(array) com alguns dados
// console.log(lista.indexOf('Carlos')); // O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

// console.log(lista.indexOf('Carlos Eduardo')); // retora -1 pois não foi encontrado

// lista[0] = 'Carlos Eduardo'; // alterado o conteudo da posição 0 que antes era 'Carlos' e agora passou a ser 'Carlos Eduardo' 

// console.log(lista.indexOf(2023)); // Usado o metodo indexOf para procurar 2023 no array lista, ele retora a posição 3.

// lista.push('João'); // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

// lista.shift(); // O método *hift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
// lista.pop(); // O método pop() remove o último elemento de um array e retorna aquele elemento.

// lista.join(', ') // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. pode ser separado por , . - ; etc...

//###################################################################################################################################################################################

//###################################################################################################################################################################################
//APRENDENDO LOOPS

// while  =  enquanto

// var x = 0;

// while(x < 10) { // A instrução while cria um loop que executa uma instrução especificada desde que a condição de teste seja avaliada como verdadeira. A condição é avaliada antes de executar a instrução.
//     document.write("<br> O valor do X é: " + x);
//     // x++ é igual a expressão x = x + 1;
//     x++; // O operador de incremento (++) incrementa (adiciona um ao) seu operando e retorna o valor antes ou depois do incremento, dependendo de onde o operador é colocado, exemplo x++(incrementa depois) or ++x(incrementa antes).
// }

// for = para

// var valor = 15;

// for(a = 0; a <= valor; a++) { // A instrução for cria um loop que consiste em três expressões opcionais, entre parênteses e separadas por ponto e vírgula, seguidas por uma instrução (geralmente uma instrução de bloco) a ser executada no loop.
//     document.write("<br> O valor do A é: " + a);
// }

//###################################################################################################################################################################################
//CONHECENDO SWITCH

// function pedir() {
//     var valor = prompt('Digite um valor de 1 a 4:');
//     console.log(typeof valor); // Cuidado pois o que o prompt retorna é uma string e no caso precisamos de um numerico então vamos converter
//     console.log(typeof Number(valor)); // retonar um number

//     switch(Number(valor)) { // A instrução switch avalia uma expressão, comparando o valor da expressão com uma série de cláusulas case
//         case 1:
//             alert("Você escolheu 1 = Suco");
//         break;
//         case 2:
//             alert("Você escolheu 2 = Agua gelada");
//         break;
//         case 3:
//             alert("Você escolheu 3 = Sorvete");
//         break;
//         case 4:
//             alert("Você chamou o garçom!");
//         break;
//         default:
//             alert("Escolha uma opção entre 1 a 4");
//         break;
//     }

//     //switch com variavel texto (string)
//     switch(valor) { // A instrução switch avalia uma expressão, comparando o valor da expressão com uma série de cláusulas case
//         case 'Carlos':
//             alert("Olá CARLOS");
//         break;
//         case 'Natalia':
//             alert("Olá NATALIA");
//         break;
//         default:
//             alert("Olá FULANOS");
//         break;
//     }
// }

//###################################################################################################################################################################################
//MANIPULANDO DATAS

// var data = new Date(); //Criando com a data de hoje do sistema do computador
// console.log(data);

// Mas e como desmenbrar essa data? pois ela retorna assim: Sat Mar 11 2023 17:31:19 GMT-0300 (Horário Padrão de Brasília) e caso eu queira pegar apenas as horas?

//data.get... retorna varios metodos do objeto Date
// console.log(data.getDate());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds());

// // E se eu quiser criar uma data especifica? eu passando o valor da data?

// var datanova = new Date("March, 10, 2018");
// console.log(datanova);

// // Como converter uma data em milissegundos?
// console.log("Datanova em milissegundos: " + Date.parse(datanova));

// // Eu posso tambem criar uma nova data passando os milissegundos:
// var datamilli = new Date(1520650800000);
// console.log(datamilli);

// // E como pegar apenas uma parte dessa estrutura data? Sat Mar 11 2023 17:38:21 GMT-0300 (Horário Padrão de Brasília)
// datanova.getDate(); //pegando o dia
// datanova.getMonth(); // repara que esse get retorna o valor 2 mesmo estando em Mar é porque no javascript começa-se contar do 0, sendo 0=janeiro 1=fevereiro etc...
// datanova.getDay(); // retorna 6 que é sabado, começa contando no domingo=0, segunda=1, terça=2, quarta=3, etc...
// datanova.getFullYear() // retorna 2018

// // Formatar a data Dia/Mês/Ano
// console.log(datanova.getDate() + "/0" + (datanova.getMonth() + 1) + "/" + datanova.getFullYear());

// // Alterando o data somando +5 no dia de dia 10 para dia 15
// datanova.setDate(datanova.getDate() + 5);

// // Alterando as horas somando +10 horas
// datanova.setHours(datanova.getHours() + 10);

// // Como mostrar se hoje é segunda, ternça quarta, quinta, sexta, sabado ou domingo?
// datanova.getDay();
// var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
// dias[datanova.getDay()];
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//PRATICANDO CONHECIMENTOS

// Criando uma calculadora de IMC

/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acima do peso
*/

// peso / (altura * altura);

// var peso;
// var altura;
// var imc;
// var resultado;

// function calcularIMC(event) { // Índice de massa corporal
//     event.preventDefault(); // Cancela o evento se for cancelado, sem parar a propagação do mesmo. nesse caso cancela o recarregamento da pagina pois a programação interpreta como o envio de um formulário e por padrão recarrega.
    
//     peso = document.getElementById('peso').value; // pegando la do document um elemento pelo seu id, esse id peso foi declarado la no index.html
//     altura = document.getElementById('altura').value;
//     console.log(peso);
//     console.log(altura);

//     imc = peso / (altura * altura);
//     console.log(imc);

//     resultado = document.getElementById('resultado');
//     if(imc < 17) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está muito abaixo do peso!'; //O método toFixed() formata um número utilizando notação de ponto fixo.
//     } else if(imc > 17 && imc <= 18.49) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!';
//     } else if(imc >= 18.5 && imc <= 24.99) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!';
//     } else if(imc > 25 && imc <= 29.99) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso!';
//     } else if(imc >= 30) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado Obsidade!';
//     }

//     // Limpando os campos após o calculo
//     document.getElementById('peso').value = '';
//     document.getElementById('altura').value = '';
// }
//###################################################################################################################################################################################

//Seção 3: JavaScript - Avançando
//###################################################################################################################################################################################
//ENTENDENDO TEMPORIZADORES

// setInterval - executa de tempos em tempos infinitamente

// function acao() {
//     document.write("Executando... <br/>");
// }
// setInterval(acao, 1000);

// var timer = setInterval(() => { //função anonima então a gente pode escrever aqui a função
//     document.write("Executando!!! <br/>");
// }, 1000)
//consigo pausar o setInterval? sim associando ele a uma variavel
// clearInterval(timer); com esse clear a gente para o Interval

// setTimeout - executa apenas uma vez aquilo que você passar

// setTimeout(() => {
//     console.log("EXECUTOU NOSSO TIMEOUT")
// }, 3000);

// Então baiscamente é essa a diferença entre o setInterval e o setTimeout, setInterval executa infinitas vezes e o setTimeout apenas uma unica vez.
// com o setInterval podemos criar relogio, cronometro, etc...
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//DIFERENÇA ENTRE VAR, LET E CONST

//um comentario a mais sobre o operador na comparação
//quando você utiliza o operador == , a linguagem faz o cast ou conversão de tipos para comparação dos valores. 
//Já o operador === diz para comparar os tipos de dados e valores que estão sendo testados.
// var nome = "Sujeito"; 

// if(nome === "Sujeito") {
//     var curso = "Programador Frontend";
//     console.log(curso);
//     let cargo = "CEO - Sujeito Programador";
//     console.log(cargo);
// }

// nos conseguimos ter acesso a essa variavel curso mesmo ela tendo sido criada dentro do if
// e existem situações  em que a gente não quer que qualquer um tenha acesso a variavel por exemplo um salario, um saldo de conta
// mas isso já não acontece com a nossa variavel cargo que foi definida com let, caso tentemos acessar fora do if retorna: cargo is not defined

// let bonus = true;

// if(bonus) {
//     let salario = 4000 + 600;
//     console.log(salario);
// }

// let possui escopo de bloco, portanto sempre que criamos dentro de um if, função, condição a gente apenas tem acesso a ele dentro do bloco desse escopo
// já o var possui escopo global

// const tambem possui escopo de bloco, porem por ser uma constante após você criar ela, não é possivel mais alterar seu valor
// const é imutavel

// const cargo = "Programador Front end";
// console.log(cargo);
// cargo = "Programador Mobile"; // retorna um erro: Uncaught TypeError: Assignment to constant variable. pois não é possivel alterar uma const.
// // e também não é possivel criar uma constant sem dar a ela um valor exemplo const sobrenome;
// const sobrenome = "Eduardo"; // assim pode pois já estamos atribuindo valor
// e lembrando que é escopo de bloco igual a let, então só é possivel acessar dentro do bloco, if, função, etc...

//###################################################################################################################################################################################

//###################################################################################################################################################################################
//OBJETOS

// let lista = [123, 4, 'Carlos'];
// console.log(lista);

// Objeto é uma variavel do tipo objeto

// let pessoa = {
//     nome: 'Carlos',
//     idade: '22',
//     altura: '1.76',
//     cargo: "Programador FullStack"
// };
// console.log(pessoa);
// Para ter acessoa apenas a uma informação dessa pesosa fazemos assim:
// console.log(pessoa.nome);
// console.log(pessoa.cargo);

// let carro = {
//     nome: 'Golf 1.6',
//     cor: 'Branco',
//     potencia: '140cv'
// }
// console.log(carro);
// Acessando os dados do carro:
// console.log(carro.potencia);
// console.log(carro.nome);

//podemos ter lista com objetos
// Lista de Objetos

// let usuarios = [
//     {nome: "Carlos", cargo: "Programador", status: "ATIVO"},
//     {nome: "Natalia", cargo: "Farmacêutica", status: "ATIVO"},
//     {nome: "Maria", cargo: "Vendedora", status: "FORA DE SERVIÇO"}
// ];
// console.log(usuarios);
// E agora navegando numa lista de objeto
// console.log(usuarios[0]); 
// console.log(usuarios[1].nome);
// console.log(usuarios[1].cargo);

//###################################################################################################################################################################################

//###################################################################################################################################################################################
//VARIAVEIS DENTRO DE STRING

// Template strings
// let nome = "Carlos";
// let sobrenome = "Eduardo";
// let idade = "22";

//  let mensagem = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade"; // assim é muito ruim de concatenar tudo

//precisa ser com crase ``
// let mensagem1 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`; // olha como essa maneira é muito melhor, facil e mais legivel
// let mensagem2 = `Teste mensagem ${nome}`;
// console.log(mensagem1);

//###################################################################################################################################################################################

//###################################################################################################################################################################################
//DESCONSTRUINDO ARRAY

// desconstruir um objeto

// let pessoa = {
//     nome: "Carlos",
//     sobrenome: "Eduardo",
//     empresa: "Sujeito Programador",
//     cargo: "Programador Fullstack"
// }

// console.log(pessoa.nome);
// console.log(pessoa.cargo);

// let nome = "TESTE" // declarei essa variavel aqui para mostrar alterando o nome da propriedade do objeto pessoa que tbm é nome.

// const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa; //desconstruindo pessoa, é como se ele criasse uma const nome e cargo e colocasse os atributos do objeto pessoa.

// console.log(nomePessoa);
// console.log(sobrenome);
// console.log(empresa);
// console.log(cargo);

// ======================

// Desconstruir um array
           //   0          1         2
// let nomes = ["Carlos", "Natalia", "Maria"];

// let { 0:carlos, 2:terceiraPessoa} = nomes;

// console.log(carlos); // retorna Carlos
// console.log(terceiraPessoa); // retorna Maria

// a outra maneira tbm de descontruir array que é por posição
// let [primeironome, segundonome] = nomes;
// console.log(primeironome);
// console.log(segundonome);
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//CONHECENDO SPREAD OPERATOR

// let primeiros = [1, 2, 3];
// let numeros = [4, 5 , 6]; exemplo que comentado
// e se eu quiser juntar o primeiro com o segundo?
// seria só colocar assim: let numeros = [primeiros, 4, 5 , 6]; não pois isso retornaria um array dentro de um array e não a sequencia como gostariamos
// é ai que entra o spread operator
// let numeros = [...primeiros, 4, 5 , 6];
// console.log(numeros);

// outro exemplo
// let pessoa = {
//     nome: "Matheus",
//     idade: 45,
//     cargo: "RH"
// }

// let novaPessoa = {
//     ...pessoa, // usando spread operator para juntar os dados
//     status: "ATIVO",
//     cidade: "Teodoro Sampaio / SP",
//     telefone: "18981145021"
// }
// console.log(novaPessoa);

// outro exemplo
// function novoUsuario(info) {
//     let dados = {
//         ...info, // spread operator para pegar as informações
//         status: "ATIVO",
//         iniciando: "12/03/2023",
//         codigo: "123123"
//     };
//     console.log(dados);
// }

// novoUsuario({nome: "Jose", sobrenome: "Silva", cargo: "DEV"})
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//REST OPERATOR

// é bem parecido com o spread operator porem mais voltado para funções
// ajuda quando você não sabe a quantidade de parametros que você precisa receber

// function convidados(...nomes) { // rest operator é parecido com o spread, porem é de função, ele recebe tudo e trata como uma lista
//     console.log("SEJA BEM VINDO TODOS CONVIDADOS");
//     console.log(nomes);
// }

// convidados("Matheus", "Lucas", "Maria", "Ana caroline");

// Vamos criar um sorteador de número

// function sorteador(...numeros) { // rest operator ...numeros
//     console.log(numeros);

//     // Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
//     //Math.floor garante que será um número inteiro, return integer
//     const numeroGerado = Math.floor(Math.random() * numeros.length);
//     console.log("Numero gerado foi: " + numeros[numeroGerado]);
// }

// sorteador(1, 4, 5, 15, 25, 90, 55, 34);
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//OPERAÇÃO EM UMA LISTA pt1

// MAP = PERCORRER TODO UM ARRAY.

// let lista = ["Carlos", "Natalia", "Maria", "Luiz"];

// lista.map((value, index) => {
//     console.log(`Passando: ${value} - Está na posição: ${index}`);
// });

// REDUCE = O reduce busca reduzir um array.

// let numeros = [5, 3, 2, 5];

// let total = numeros.reduce((acumulador, numero, indice, original) => { 
//     console.log(`${acumulador} - total até o momento`);
//     console.log(`${numero} - valor atual`);
//     console.log(`${indice} - indice/posição atual`);
//     console.log(`${original} - array original`);
//     console.log("==============================");

//     return acumulador += numero;
// });

// console.log(`Total do reduce: ${total}`);
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//OPERAÇÃO EM UMA LISTA pt2

// FIND = busca alguma coisa, verifica se existe no array, retorna o primeiro item que encontrar.

// let listagem = [5, 3, "Natalia", 2, "Carlos"];

// let busca = listagem.find((item) => {
//     //return item === "Natalia"; // retorna Natalia
//     //return item === "Pedro"; //  retorna undefined, pois não foi encontrado.

//     if(item === "Natalia") {
//         return console.log("Item encontrado com sucesso");
//     }
// });

// console.log(busca);

// FILTER = filtra alguma coisa dentro de um array, retorna tudo que for filtrado não apenas o primeiro encontrado

// let palavras = ["Carlos", "Natalia", "Jose", "Maria", "Cadu", "Luiz", "Jose"];

// let filtro = palavras.filter((value) => {
//     // return value.length <= 4;
//     return value === "Jose";
// });

// console.log(filtro); // retorna ['Cadu', 'Luiz']
//###################################################################################################################################################################################

//###################################################################################################################################################################################
//CONHECENDO FUNÇÕES ANÔNIMAS



//###################################################################################################################################################################################

//###################################################################################################################################################################################
//USANDO INCLUDES ENDSWITH, STARTSWITH

//###################################################################################################################################################################################
