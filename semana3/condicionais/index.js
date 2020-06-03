//Exercícios de interpretação de código
//EXERCÍCIO 1

// R - Pega um número fornecido pelo usuário
//     compara o resto da divisão desse número por 2 com 0(zero)
//     se a comparação estiver correta retorna "Passou no teste" = número par
//     se não retorna "Não passou no teste" = número impar

// const respostaDoUsuario = prompt ( "Digite o número que você deseja testar?" )
// const número = número ( respostaDoUsuario ) 
 

// if ( numero % 2 === 0 ) { 
//   console . log ( "Passou no teste." ) } else { 
//   console . log ( "Não passou no teste." ) }  


// //EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a. Para que serve o código acima?
//      Para verificar o valor das frutas

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//      O preço da fruta  Maçã  é  R$  2.25

// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//      ( 3.5 * 2 ) + 2.25 + ( 5 * 3) + 0.30 = 24.55

// d. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
//      O preço da fruta  Pêra  é  R$  5, porque o break é quem faz sair da execução
 

//EXERCÍCIO 3

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

// Considere um usuário que digita os números 3 e 4 respectivamente.Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//      Vai dar um erro pois a variável "mensagem" foi declarada no escopo da condição filha.
//      A variável "mensagem" foi declarada em um escopo local e o console.log chamou ela no escopo global.



// Exercícios de escrita de código
// EXERCÍCIO 4

// a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

// let primeiroNumero = Number(prompt("Digite o primeiro número"))
// let segundoNumero = Number(prompt("Digite o segundo número"))

// if (primeiroNumero > segundoNumero ) {
//     console.log(" A ordem decrescente é: ", primeiroNumero,',', segundoNumero)
// } else if (primeiroNumero < segundoNumero ){
//     console.log(" A ordem decrescente é: ", segundoNumero,',', primeiroNumero)
// } else {
//     console.log("Os números", primeiroNumero, " e ", segundoNumero, "são iguais")
// }

// funcionou normalmente, não deu erro. Porém não tinha nada sinalizando que os números eram iguais, então acrescentei outro if e else


// b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

// let primeiroNumero = Number(prompt("Digite o primeiro número"))
// let segundoNumero = Number(prompt("Digite o segundo número"))
// let terceiroNumero = Number(prompt("Digite o terceiro número"))

// if ((primeiroNumero > segundoNumero ) && (primeiroNumero> terceiroNumero)) {
// } 

// else if ((segundoNumero > primeiroNumero) && (segundoNumero > terceiroNumero )){
// } 

// else if ((terceiroNumero > primeiroNumero) && (terceiroNumero > segundoNumero )){
// }

//console.log("Os números", primeiroNumero, " e ", segundoNumero, "são iguais")
// c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.

