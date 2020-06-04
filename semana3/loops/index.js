// Exercícios de interpretação de código
// EXERCÍCIO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console? 

//declara a variável sum
let sum = 0
//declara a variável i no início
//no meio tem a condição que limita até quando o laço vai executar
for(let i = 0; i < 15; i++) {
    //soma o valor da variável "sum" com o valor da variável "i" e atribui esse valor a variável "sum"
    sum += i
}
//mostra o resultado no console
console.log(sum)
// Resultado 105
//0+1>>1+2>>3+3>>6+4>>10+5>>15+6>>21+7>>28+8>>36+9>>45+10>>55+11>>66+12>>78+13>>91+14>>105
