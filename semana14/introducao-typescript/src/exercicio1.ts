// Exercício 1
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
let minhaString: string = "Oi"
// minhaString = 3
// O tipo '3' não pode ser atribuído ao tipo 'string'.ts(2322)

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
// let meuNumero: number = 4
let meuNumero:any = "Oi"
meuNumero = 3

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// nome, que é uma string;
// idade, que é um número;
// corFavorita, que é uma string.
const pessoa: {
    nome: string,
    idade: number,
    corFavorita: string
} = {
    nome: "João",
    idade: 99,
    corFavorita: "Branco escuro"
}

// d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.
enum CORES_DO_ARCOIRIS {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}
type pessoa ={
    nome: string,
    idade: number,
    corFavorita: string
}
const carla:pessoa = {
    nome: "Carla",
    idade: 98,
    corFavorita: "Branco escuro"
}
const well:pessoa = {
    nome: "Well",
    idade: 97,
    corFavorita: "Branco escuro"
}
const joao:pessoa = {
    nome: "João",
    idade: 99,
    corFavorita: CORES_DO_ARCOIRIS.AZUL
}

