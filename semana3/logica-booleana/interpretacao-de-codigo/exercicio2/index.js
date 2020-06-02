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

let array
console.log('I. ', array)                                   //I.  undefined

array = null
console.log('II. ', array)                                  //II.  null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)                          //III.  11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])            //IV.  3  e  4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)                //V.  19  e  9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])                               //VI.  3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)                            //VII.  1




