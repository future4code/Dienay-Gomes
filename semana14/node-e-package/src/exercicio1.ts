// a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
//utilizando o process.argv após "node nome-do-arquivo parâmetro"

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."
let nome: string = process.argv[2]
let idade: number = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)