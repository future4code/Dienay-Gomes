//Exercícios de interpretação de código

//EXERCÍCIO 1
// Essa função converte o quanto você tem em dólares em reais dependendo da cotação que você fornecer no prompt

// a função conversorDeMoeda solicita uma entrada de um valor em dólar que no caso será 100 dólares como mostra na chamada da ultima linha escrita de código.
// dentro dessa função é solicitado uma entrada do usuário através do prompt do valor da cotação do dolar, esse valor é convertido em number logo na entrada.
// ela vai retornar esse valor em reais multiplicando o valor adicionado na chamada da função pelo introduzido pelo usuário que é o da cotação.

// Hoje o console.log vai retornar R$501,97


//EXERCÍCIO 2
// Essa função recebe um tipo de investimento e um valor para esse investimento, compara ele, e devolve o valor atualizado baseado no tipo de investimento.

// Primeiro o switch vai pegar o valor inserido no primeiro argumento da função, compara a cada caso específico criados nele, caso não tenha nada que se encaixe a esses casos ele entra no default e da a mensagem de tipode investimento incorreto. Mas caso ache o seu correspondente ele entra do trecho do case, pega o valor do segundo argumento da função e multiplica pelo valor que está definido nesse case específico, e põe esse valor numa variável que vai servir de retorno da função.

// console.log de novoMontante terá o resultado de 165
// edo segundoMontante será "TIPO DE INVESTIMENTO INFORMADO INCORRETO"


//EXERCÍCIO 3

// Esse programinha pega um array de números compara os pares e põe eles em outro array só com números pare e os impares vão pra outro array.

// o for percorre todo o array numeros e a cada numero o if compara se o resto da divisão desse número por 2 é igual a 0, caso seja ele adiciona esse número no array1, caso não seja esse número é adicionado no array2 através do .push

// o primeiro console.log mostra o tamanho do array numero que é 14
// o segundo console.log mostra o tamanho do array1 que é 6
// o tercei console.log mostra o tamanho do array1 que é 8


//EXERCÍCIO 4

// esse programa compara todos os números de um array e retorna o menor e o maior número.

// o for vai fazer uma varredura do primeiro ao ultimo elemento do array numeros e a cada elemento os ifs iram compara todos os números a variável numero1 vai buscar o menor número por isso ela teve valor infinito no momento em que foi declarada, Assim o primeiro número do array independente de qual for sempre será menor que o infinito com isso vai ser possível entrar nesse if. A variável numero2 vai buscar o maior número por isso foi inicializada com valor 0.

// o valor do primeiro console.log vai ser -10
// e o valor dosegundo console.log vai ser 1590


//Exercícios de Lógica de Programação

//EXERCÍCIO 1
//forEach
//for of
//map


// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// lista.forEach(numero => {
//     console.log(numero)
// });

// for (let numero of lista) {
//     console.log(numero)
// }

// mostraLista = lista.map(numero => {
//     console.log(numero)
// });