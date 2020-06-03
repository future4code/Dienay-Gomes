// 3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

//     a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
let quilowattHora = 0.05 
let consumo = 280

let valor = quilowattHora * consumo

console.log("Valor a ser pago R$" + valor)


//     b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
let desconto = 0.015
console.log("Você ganhou um desconto de R$" + (valor * desconto))
console.log("Este é o valor pago com 15% de desconto R$" + (valor - (valor * desconto)))



