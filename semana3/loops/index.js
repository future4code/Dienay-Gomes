// Exercícios de interpretação de código
// EXERCÍCIO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console? 

// //declara a variável sum
// let sum = 0
// //declara a variável i no início
// //no meio tem a condição que limita até quando o laço vai executar
// for(let i = 0; i < 15; i++) {
//     //soma o valor da variável "sum" com o valor da variável "i" e atribui esse valor a variável "sum"
//     sum += i
// }
// //mostra o resultado no console
// console.log(sum)
// // Resultado 105
// //0+1>>1+2>>3+3>>6+4>>10+5>>15+6>>21+7>>28+8>>36+9>>45+10>>55+11>>66+12>>78+13>>91+14>>105


// EXERCÍCIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista) {
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// a. O que o comando .push faz?
//  adiciona um elemento na posição final de um array

// b. Qual o valor impresso no console?
//  [10, 15, 25, 30]

// c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
//  variável numero = 3 >> [12, 15, 18, 21, 27, 30]
//  variável numero = 4 >> [14]
//  esse programa coloca os multiplos do número que está na variável "numero" e coloca esses valores na variável "novaLista"


// Exercícios de escrita de código
// EXERCÍCIO 3

// a. Escreva um programa que devolva o maior e o menor números contidos no array original
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = 0
// let menor = 1000

// for (let i = 0; i <= array.length; i++) {
//     let numero = array[i]
//     if (numero > maior) {
//         maior = numero
//     } else if (numero < menor) {
//         menor = numero
//     }
// }
// console.log("Esse é o menor número ", menor)
// console.log("Esse é o maior número ", maior)

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (const item of array) {    
//     novoArray.push(item/10)
// }
// console.log(novoArray)

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (const item of array) {
    if (item % 2 === 0){
        novoArray.push(item)
    }
}

console.log(novoArray)


// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"