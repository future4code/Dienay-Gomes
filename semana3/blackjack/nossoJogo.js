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

let carta1Usuario = 0
let carta2Usuario = 0
let carta1Cpu = 0
let carta2Cpu = 0
let resultadoUser = 0
let resultadoCpu = 0

if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
   carta1Usuario  = comprarCarta()
   carta2Usuario  = comprarCarta()

   resultadoUser = (carta1Usuario.valor) + (carta2Usuario.valor)
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${resultadoUser}`)
   

   carta1Cpu = comprarCarta()
   carta2Cpu = comprarCarta()

   resultadoCpu = (carta1Cpu.valor) + (carta2Cpu.valor)
   console.log(`Computador - cartas: ${carta1Cpu.texto} ${carta1Cpu.texto}  - pontuação ${resultadoCpu}`)

   if (resultadoUser > resultadoCpu || resultadoUser === 21){
      console.log("O usuário ganhou!")
   } else if (resultadoUser < resultadoCpu || resultadoCpu ===21) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
}