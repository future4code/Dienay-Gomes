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

//nessa versão preferi utilizar arrays, pra facilitar na distribuição e compra de cartas.
let cartasUser = []
let cartasCpu = []

let resultadoUser = 0
let resultadoCpu = 0

if (confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"

	//compra das primeiras cartas para o usuário e computador
	for (let i = 0; i < 2; i++) {
		cartasUser.push(comprarCarta())
		cartasCpu.push(comprarCarta())
	}

	//caso o usuário o computador recebam 2 "A" receberam cartas novas
	while (cartasUser[0].valor === 11 && cartasUser[1].valor === 11 || cartasCpu[0].valor === 11 && cartasCpu[1].valor === 11) {
		for (let i = 0; i < 2; i++) {
			cartasUser = cartasUser.push(comprarCarta())
			cartasCpu = cartasCpu.push(comprarCarta())
		}

	}

	//mostrando uma carta do computador e as duas do usuário. Aqui o usuário pode comprar mais 3 cartas ou ficar comas que já tem na mão.
	let compraDeCarta = ""
	for (item of cartasUser){
		compraDeCarta += " " + item.texto 
	}

	if (confirm(`Suas cartas são ${compraDeCarta}. A carta revelada do computador é ${cartasCpu[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")) {

		cartasUser.push(comprarCarta())

		compraDeCarta = ""
		for (item of cartasUser){
			compraDeCarta += " " + item.texto 
		}

		if (confirm(`Suas cartas são ${compraDeCarta}. A carta revelada do computador é ${cartasCpu[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")) {

			cartasUser.push(comprarCarta())

			compraDeCarta = ""
			for (item of cartasUser){
				compraDeCarta += " " + item.texto 
			}

			if (confirm(`Suas cartas são ${compraDeCarta}. A carta revelada do computador é ${cartasCpu[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")) {

				cartasUser.push(comprarCarta())
				
				compraDeCarta = ""
				for (item of cartasUser){
					compraDeCarta += " " + item.texto 
				}
			} else {

			}
		} else {

		}
	} else {

	}

	//soma dos pontos do usuário
	for (let i in cartasUser) {
		resultadoUser += cartasUser[i].valor
	}

	//soma dos pontos do computador
	for (let i in cartasCpu) {
		resultadoCpu += cartasCpu[i].valor
	}

	//computador decide se paga mais cartas
	if (resultadoCpu < 16) {
		cartasCpu.push(comprarCarta())
		resultadoCpu += cartasCpu[2].valor

		if (resultadoCpu < 16) {
			cartasCpu.push(comprarCarta())
			resultadoCpu += cartasCpu[3].valor

			if (resultadoCpu < 16) {
				cartasCpu.push(comprarCarta())
				resultadoCpu += cartasCpu[4].valor
			} else {

			}
		} else {

		}
	} else {

	}

	//mensagem mostrando cartas e pontos do usuário
	let mensagemUser = ""

	for (item of cartasUser){
		mensagemUser += " " + item.texto 
	}

	//mensagem mostrando cartas e pontos do computador
	let mensagemCpu = ""

	for (item of cartasCpu){
		mensagemCpu += item.texto + " "
	}

	//mensegem de vencedor ou empates
	let resultado = ""

	if (resultadoUser > 21) {
		resultado = "O computador ganhou!"
	} else if (resultadoCpu > 21) {
		resultado = "O usuário ganhou!"
	} else if (resultadoUser > resultadoCpu || resultadoUser === 21) {
		resultado = "O usuário ganhou!"
	} else if (resultadoCpu > resultadoUser || resultadoCpu === 21) {
		resultado = "O computador ganhou!"
	} else if (resultadoUser === resultadoCpu || (resultadoUser > 21 && resultadoCpu > 21)){
		resultado = "Empate!"
	}

	alert(`Suas cartas são ${mensagemUser}. Sua pontuação é ${resultadoUser}.\n As cartas do computador são ${mensagemCpu}. A pontuação do computador é ${resultadoCpu}. \n ${resultado}`)

} else {
	// o que fazer se o usuário clicar "cancelar"
	console.log("O jogo acabou")
}
