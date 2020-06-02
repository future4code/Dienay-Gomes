// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let fahrenheitA = 77
let kelvinA = (fahrenheitA - 32) * 5 / 9 + 273.15
console.log(fahrenheitA + " Graus Fahrenheit é igual a " + kelvinA + " Kelvin")



// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let celsiusB = 80
let fahrenheitB = (celsiusB * 9 / 5) + 32
console.log(celsiusB + " Graus Celsius é igual a " + fahrenheitB + " Graus Fahrenheit")


// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
let celsiusC = 30
let fahrenheitC = (celsiusC * 9 / 5) + 32
let kelvinC = celsiusC + 273.15
console.log(celsiusC + " Graus Celsius é igual a " + fahrenheitC + " Graus Fahrenheit, e " + kelvinC + " Kelvin")

// d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let celsiusD = Number(prompt("Digite a temperatudo em Celsius"))
let kelvinD = celsiusD + 273.15
let fahrenheitD = (celsiusD * 9 / 5) + 32
console.log(celsiusD + " Graus Celsius é igual a " + fahrenheitD + " Graus Fahrenheit, e " + kelvinD + " Kelvin")
