const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3                 
console.log("a. ", resultado)                           

resultado = (bool2 || bool1) && !bool3 
console.log("b. ", resultado)                           

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)                           

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)                           

console.log("e. ", typeof resultado)                    

//a. false
// O valor é false por que para ser true, todos os valores teriam que ser true

//b. false
//(bool2 || bool1) = true >> true && !bool3 = false
//Na parte entre parentese deu true porque bastava ter um true.
//true && false deu false, pois o bool! é um false

//c. true
//O resultado daquestão anterior é reutilizado mas negando e o resultados entre parenteses é true. Juntando os dois dá true

//d. false
//nos parenteses do meio dá false por serem um false e um negação de true. E como quando tem && só é tru quando todos são true, o resultado é false.


//d. boolean
//mostrou o tipo da variável resultado