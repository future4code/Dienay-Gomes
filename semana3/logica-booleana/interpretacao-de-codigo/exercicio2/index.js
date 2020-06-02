/*
a. O que é `array` e como se declara em `JS`?
    É a maneira de guardar várias informações de uma só vez e em um mesmo lugar.

    let array = ['comida', 4, 5, fome]

b. Qual o index inicial de um `array`?
    O indice inicia do 0(zero)

c. Como se determinar o tamanho do `array`?
    Com o comando .length

d. Indique todas as mensagens impressas no console.
*/
//I.  undefined
let array
console.log('I. ', array)
//mostra que a variável array é undefined

//II.  null
array = null
console.log('II. ', array)
//mostra que a variável array tem valor null


//III.  11
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//mostra o tamanha do array "array"


//IV.  3  e  4
let i = 0
//variável i recebe valor 0
console.log('IV. ', array[i], " e ", array[i+1])
//mostra os valores na posição 0 e 1

//V.  19  e  9
array[i+1] = 19
//posição 1 do array recebe o valor 19
const valor = array[i+6]
//variável valor recebe o valor do item 6 do array
console.log('V. ', array[i+1], " e ", valor)
//mostra o valor da posição 1 de array e o valor da variável valor 

//VI.  3
i+=1
//variável i recebe valor 1 (i = i + 1)
array[i] = array[i-1]
//subtrai 1 do valor da posição 1 do array
console.log('VI. ', array[i])
//mostra o valor do item da posição 1

//VII.  1
i = array.length - 1
//variável i recebe valor do ultimo item do array
array[i] = array[i-3]
//subtrai 3 do valor da variável i (3 - 13)
const resultadoC = array[i]%array[1]
//
console.log('VII. ', resultadoC)




