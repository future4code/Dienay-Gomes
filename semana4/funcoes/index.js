// Exercícios de interpretação de código
// EXERCÍCIO 1

// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(5))
// console.log(minhaFuncao(8))

// a. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(2)
//  [] o primeiro for vai executar só uma vez pois 2 é maior do que zero, mas na segunda iteração i também vale 2 e como é pra repetir enquanto i for menor que quantidade não vai mais repetir. no segundo for a primeira iteração i não é maior que j, então não vai entra no laço.

// b. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(5)
//  [0, 1, 0, 1, 2, 3] no primeiro for quantidade vale 5, mas i vale 0 então não entra no segundo for. Na primeira repetição i vale 2 então vai entrar no segundo for haverá duas repetições e add 0 e 1 no array ficando array[0, 1]. Na proxima repetição do primeiro for i vale 4, então teram 4 repetições no segundo for adicionando 0, 1, 2, 3 no array, ficando array[0, 1, 0, 1, 2, 3]
// c. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(8)
//    seguindo o raciocínio das questões anteriores o i do for mais externos vai ter consequente os valores 0, 2, 4 e 6. o for de dentro terá 3 cíclos gerando [0, 1], [0, 1, 2, 3] e [0, 1, 2, 3, 4, 5] e como push sempre adiciona os valores no final do array vai ficar array[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
