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


//EXERCÍCIO 2

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console
//  Essa função pede um array e um nome como argumentos. Ela olha dentro do array e "vê" se o nome fornecido e retorna o indice onde esse nome se encontra no array, sendo assim o resultados de cada console.log será 0 e 2, como o nome "Paula" não está no array não vai retornar para essa opção

// b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
//  funcionaria, pois os valores contidos num array são acessados da mesma forma independente do tipo.


//EXERCÍCIO 3

// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];

//     for (let x of array) {
//         resultadoA += x;
//         resultadoB *= x;
//     }

//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
// }

// const array = [1, 2, 3, 4, 5]
// console.log(metodo(array))

//  Ela pega os valores do array e soma todos eles entre si e guarda esse resultado na variável resultadoA e multiplica todos entre si e guarda esse resultado na variável resultadoB, logo após isso insere esses dois valores em um novo array chamado arrayFinal. Talvez chamar de somaEMultiplica seja mais sugestivo.


// Exercícios de escrita de código
// EXERCÍCIO 4

// a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro

// function idadeDeDoguineo(idade) {
//     const resultado = idade * 7
//     return resultado
// }

// console.log(idadeDeDoguineo(4))