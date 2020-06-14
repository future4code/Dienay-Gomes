//Exercícios de interpretação de código

//EXERCÍCIO 1
// Essa função converte o quanto você tem em dólares em reais dependendo da cotação que você fornecer no prompt

// a função conversorDeMoeda solicita uma entrada de um valor em dólar que no caso será 100 dólares como mostra na chamada da ultima linha escrita de código.
// dentro dessa função é solicitado uma entrada do usuário através do prompt do valor da cotação do dolar, esse valor é convertido em number logo na entrada.
// ela vai retornar esse valor em reais multiplicando o valor adicionado na chamada da função pelo introduzido pelo usuário que é o da cotação.

// Hoje o console.log vai retornar R$501,97


//EXERCÍCIO 2
// Essa função recebe um tipo de investimento e um valor para esse investimento, compara ele, e devolve o valor atualizado baseado no tipo de investimento.

// Primeiro o switch vai pegar o valor inserido no primeiro parâmetros da função, compara a cada caso específico criados nele, caso não tenha nada que se encaixe a esses casos ele entra no default e da a mensagem de tipode investimento incorreto. Mas caso ache o seu correspondente ele entra do trecho do case, pega o valor do segundo parâmetros da função e multiplica pelo valor que está definido nesse case específico, e põe esse valor numa variável que vai servir de retorno da função.

// console.log de novoMontante terá o resultado de 165
// edo segundoMontante será "TIPO DE INVESTIMENTO INFORMADO INCORRETO"


//EXERCÍCIO 3

// Esse programinha pega um array de números compara os pares e põe eles em outro array só com números pare e os impares vão pra outro array.

// o for percorre todo o array numeros e a cada numero o if compara se o resto da divisão desse número por 2 é igual a 0, caso seja ele adiciona esse número no array1, caso não seja esse número é adicionado no array2 através do .push

// o primeiro console.log mostra o tamanho do array numero que é 14
// o segundo console.log mostra o tamanho do array1 que é 6
// o tercei console.log mostra o tamanho do array1 que é 8


//EXERCÍCIO 4

// esse programa compara todos os números de um array e retorna o menor e o maior número.

// o for vai fazer uma varredura do primeiro ao ultimo elemento do array numeros e a cada elemento os ifs iram compara todos os números a variável numero1 vai buscar o menor número por isso ela teve valor infinito no momento em que foi declarada, Assim o primeiro número do array independente de qual for sempre será menor que o infinito com isso vai ser possível entrar nesse if. A variável numero2 vai buscar o maior número por isso foi inicializada com valor 0.

// o valor do primeiro console.log vai ser -10
// e o valor dosegundo console.log vai ser 1590


//Exercícios de Lógica de Programação

//EXERCÍCIO 1
//forEach
//for of
//map

// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach(numero => {
//     console.log(numero)
// });

// for (let numero of lista) {
//     console.log(numero)
// }

// mostraLista = lista.map(numero => {
//     console.log(numero)
// });

//EXERCÍCIO 2
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 true
// const booleano4 = !booleano3 false
// a) true && false && true = false
// b) (true && false) || false = false
// c)  (false || true) && (false || true) = true
// d) !(false && true) || !(true && true) = true
// e) !(true) && !(true) || (true && true && true) true

//EXERCÍCIO 3
// da forma que estava o while entraria em um loop infinito, pois não tinha iteração na variável i, então continuaria com o valor 0 e se colocasse qualquer valor positivo a partir de 1 ou até mesmo zero a condição estaria verdadeira.
// para dar o resultado esperado eu tirei a iqualdade da comparação e coloquei i++ o contador i aumentar até o valor digitado no caso até um número antes do que for escolhido.

// const quantidadeDeNumerosPares = 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

//EXERCÍCIO 4
// function tipoDeTriangulo(a, b, c) {
//     if((a === b) && (a === c)) {
//         console.log("Triângulo Equilátero")
//     } else if((a === b) || (a === c) || (b === c)) {
//         console.log("Triângulo Isósceles")
//     } else {
//         console.log("Triângulo Escaleno")
//     }
// }

// tipoDeTriangulo(1, 2, 3)

//EXERCÍCIO 5
// let num1 = 150
// let num2 = 30
// let maior = 0
// let menor = 0

// if (num1 > num2) {
//     console.log(`O maior número é ${num1}`)
//     maior = num1
//     menor = num2
// } 

// if (num2 > num1) {
//     console.log(`O maior número é ${num2}`)
//     maior = num2
//     menor = num1
// } 

// if (num1 % num2 === 0) {
//     console.log(`${num1} é divisivel por ${num2}`)
// } 

// if (num1 % num2 !== 0) {
//     console.log(`${num1} não é divisivel por ${num2}`)
// }

// if (num2 % num1 === 0) {
//     console.log(`${num2} é divisivel por ${num1}`)
// }

// if (num2 % num1 !== 0) {
//     console.log(`${num2} não é divisivel por ${num1}`)
// }

// console.log(`A diferença entre eles é ${maior - menor}`)


//Exercícios de Funções
//EXERCÍCIO 1
// const array = [ 1, 2, 34, 5, 6, 46, 86, 23, 24, 85]
// function mostraSegungoMenorEMaior(array) {
//     let maior = 0
//     let menor = Infinity

//     for (let e of array) {
//         if (e < menor) {
//             menor = e
//         } else if (e > maior) {
//             maior = e
//         }
//     }

//     const semMenor = array.filter(numero => numero !== menor)
//     const semMaior = semMenor.filter(numero => numero !== maior)
//     let segundoMaior = 0
//     let segundoMenor = Infinity

//     for (let e of semMaior) {
//         if (e < segundoMenor) {
//             segundoMenor = e
//         } else if (e > segundoMaior) {
//             segundoMaior = e
//         }
//     }
//     console.log("O segundo menor é ", segundoMenor)
//     console.log("O segundo maior é ", segundoMaior)

// }

// mostraSegungoMenorEMaior(array)

//EXERCÍCIO 2
// const helloOQue = function() {
//     alert("Hello Future4, ksksksks")
// }

// helloOQue()

//Exercícios de Objetos
//EXERCÍCIO 1
// 1. Arrays são recipientes que podem guarda elementes de vários tipos, colocando cada elemento em seu próŕio espaço e dando indice para eles.
// Objetos são elementos com características próprias, que poder ser acrescentadas ou retiradas segunda a necessida do momento, essas características descritas ajudam na classificação e filtragem desses objetos.

//EXERCÍCIO 2
// function criaRetangulo(lado1, lado2) {
//     console.log("Largura do retângulo: " , lado1)
//     console.log("Altura do retângulo: " , lado2)
//     console.log("Perímetro do retângulo: " , (2 * (lado1 + lado2)))
//     console.log("Área do retângulo: " , (lado1 * lado2))
// }

// criaRetangulo(20, 15)

//EXERCÍCIO 3
// const filmeFavorito = {
//     titulo: 'Jumanji: Bem Vindo à Selva',
//     ano: '2017',
//     diretor: 'Jake Kasdan',
//     ator1: 'Dwayne Johnson',
//     atriz: 'Karen Gilian',
//     ator2: 'Kevin Hart',
//     ator3: 'Jack Black',
//     ator4: 'Nick Jonas'
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.ator1}, ${filmeFavorito.atriz}, ${filmeFavorito.ator2}, ${filmeFavorito.ator3} e ${filmeFavorito.ator4} `)

//EXERCÍCIO 4
// const pessoa = {
//     nome: 'Joãozinho',
//     idade: 65,
//     email: 'joaozinho_zinho@hotmail.com',
//     endereco: 'Rua de baixo - sem número' 
// }

// function anonimizarPessoa() {
//     const anonimo = {
//         ...pessoa,
//         nome: 'ANONIMO'
//     }
// }

// anonimizarPessoa()

// Exercícios de Funções de array
// EXERCÍCIO 1
//a.
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// function adultos(array) {
//     const maiorDeVinte = array.filter((e, i, a) => {
//         return e.idade >= 20
//     })
//     console.log("Essas pessoas são adutas", maiorDeVinte)
// }

// adultos(pessoas)

// //b.
// function jovens(array) {
//     const menorDeVinte = array.filter((e, i, a) => {
//         return e.idade < 20
//     })
//     console.log("Essas pessoas são crianças e adolescentes", menorDeVinte)
// }

// jovens(pessoas)

// EXERCÍCIO 2
//a.
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicados = array.map ((e, i, a) => {
//     return e * 2
// })

// console.log(multiplicados)

//b.
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicados = array.map ((e, i, a) => {
//     return `${e * 3}`
// })

// console.log(multiplicados)

//c.
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicados = array.map ((e, i, a) => {
//     if(e % 2 === 0) {
//         return `${e} é par`
//     } else {
//         return `${e} é impar`
//     }
// })

// console.log(multiplicados)

// EXERCÍCIO 3
//a.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// function montanhaRussaDoTerror(array) {
//     const quemPodeEntrar = array.filter ((e, i, a) => {
//         if((e.altura >= 1.5) && (e.idade > 14) && (e.idade < 60)) {
//             return e
//         } 
//     })
//     console.log("Só quem pode ir na montanha russa são: ", quemPodeEntrar)
// }

// montanhaRussaDoTerror(pessoas)

//b.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// function montanhaRussaDoTerror(array) {
//     const alturaNaoPode = array.filter((e, i, a) => {
//         if((e.altura < 1.5)) {
//             return e
//         }
//     })

//     const idadeMenor = array.filter((e, i, a) => {
//         return e.idade < 15
//     })

//     const idoso = array.filter((e, i, a) => {
//         return e.idade > 59
//     })

//     const impedidos = alturaNaoPode.concat(idadeMenor, idoso)

//     console.log("Esses não poder entrar na montanha russa", impedidos)
// }

// montanhaRussaDoTerror(pessoas)

// EXERCÍCIO 4
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]
// let tratamento = "Sr./Sra."
// let data = "data da consulta"
// let novaData = "data da consulta"
// let nome = "Nome"
// let lembrar = "lembrá-lo / lembrá-la"

// const emails = [

//     {naoCancelados: `Olá, ${tratamento} ${nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${data}. Por favor, acuse o recebimento deste e-mail.`},

//     {canceladas: `Olá, ${tratamento} ${nome}. Infelizmente, sua consulta marcada para o dia ${novaData} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`}
// ]

// console.log(emails)

