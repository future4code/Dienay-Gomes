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

// b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// function dados(nome, idade, endereco, estudante) {

//     if (estudante === "sim") {
//         sou = "sou"
//     } else {
//         sou = "não sou"
//     }

//     const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${sou} estudante`

//     return frase
// }

// console.log(dados("Dienay", 29, "Rua coisada", "sim"))


//EXERCÍCIO 5

// let periodo = (ano) => {
//     const seculo = ["I","II","III","IV","V","VI","VII","VIII",'IX',"X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"]
//     const anos = [1, 101, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1101, 1201, 1301, 1401, 1501, 1601, 1701, 1801, 1901, 2001, 2101]

//     for (let i =0; i < anos.length; i++) { 
//         while (ano >= anos[i] && ano < anos[i+1])
//         return `O ano ${ano} pertence ao século ${seculo[i]}`
//     }
// }

// console.log(periodo(300))


//EXERCÍCIO 6
//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function tamanhoArray(array) {
//     let tamanho = array.length
//     return tamanho;
// }
// console.log(`O array tem ${tamanhoArray(array)} elementos`)

//b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function parOuImpar(numero) {
//     let parImpar
//     if (numero%2 === 0) {
//         parImpar = `O número ${numero} é par`
//     } else {
//         parImpar = `O número ${numero} é impar`
//     }
//     return parImpar
// }
// console.log(parOuImpar(10))

//c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

// function contaPares(numeros) {
//     let pares = 0
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] % 2 === 0) {
//             pares += 1
//         }
//     }
//     return pares
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// console.log(contaPares(array))

//d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

// let pares = 0
// function contaPares(numeros) {
    
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] % 2 === 0) {
//             pares += 1
//         }
//     }
//     let imparOuPar = parOuImpar(pares)
//     return pares
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22, 30]
// console.log(`O array tem ${contaPares(array)} números pares, ${parOuImpar(pares)}`)

// function parOuImpar(numero) {
//     let parImpar
//     if (numero%2 === 0) {
//         parImpar = `e o número ${numero} é par`
//     } else {
//         parImpar = `e o número ${numero} é impar`
//     }
//     return parImpar
// }