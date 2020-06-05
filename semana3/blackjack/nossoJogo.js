/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let carta1Cpu = comprarCarta()
let carta2Cpu = comprarCarta()
let resultadoUser = 0
let resultadoCpu = 0

if (confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
   // if (carta1Usuario === "A" && carta2Usuario === "A" || carta1Cpu === "A" && carta2Cpu === "A") {
      
   // }

   resultadoUser = (carta1Usuario.valor) + (carta2Usuario.valor)
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${resultadoUser}`)

   resultadoCpu = (carta1Cpu.valor) + (carta2Cpu.valor)
   console.log(`Computador - cartas: ${carta1Cpu.texto} ${carta1Cpu.texto}  - pontuação ${resultadoCpu}`)

   if (resultadoUser > resultadoCpu || resultadoUser === 21) {
      console.log("O usuário ganhou!")
   } else if (resultadoUser < resultadoCpu || resultadoCpu === 21) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")