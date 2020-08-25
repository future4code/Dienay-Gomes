let operacao: string = process.argv[2]
let primeiroNum: number = Number(process.argv[3])
let segundoNum: number = Number(process.argv[4])

switch(operacao){
    case "add":
        console.log(`Resposta: ${primeiroNum + segundoNum}`)
        break
    case "sub":
        console.log(`Resposta: ${primeiroNum - segundoNum}`)
        break
    case "mult":
        console.log(`Resposta: ${primeiroNum * segundoNum}`)
        break
    case "div":
        console.log(`Resposta: ${primeiroNum / segundoNum}`)
        break
    default:
        console.log("Insira informações nessa ordem 'npm run exercicio2 operação(add, sub, mult ou div) primeiro número e segundo número'")
}