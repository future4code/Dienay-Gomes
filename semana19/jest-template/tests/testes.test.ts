import { performPurchase, User } from "../src/exercicio2"
import { Casino, NACIONALITY, UserVerifyAge, LOCATION, verifyAge } from "../src/exercicio3"

describe("Testes Exercicio 2", () => {
    test("saldo maior que valor da compra", () => {
        const user: User ={
            name: "Dienay",
            balance: 100
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    test("saldo igual ao valor da compra", () => {
        const user: User ={
            name: "Dienay",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("saldo menor que o valor da compra", () => {
        const user: User ={
            name: "Dienay",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual(undefined)
    })
})

describe("Testes exercicio 4", () => {
    test("Usuário brasileiro que pode entrar em estabelecimento brasileiro", () => {
        const brazilian: UserVerifyAge = {
            name: "Dienay",
            age: 29,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Dienay"]);
    })

    test("Usuário Americano que pode entrar em estabelecimento Brasileiro", () => {
        const american: UserVerifyAge = {
            name: "Dienay",
            age: 29,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(["Dienay"]);
    })

    test("2 usuários Americanos e dois brasileiros com 19 anos em estabelecimento americano", () => {
        const brazilian: UserVerifyAge = {
            name: "Dienay BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: UserVerifyAge = {
            name: "Dienay EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);
        expect(result.brazilians.unallowed).toEqual(["Dienay BR", "Dienay BR"]);
        expect(result.americans.unallowed).toEqual(["Dienay EUA","Dienay EUA"]);
    })

    test("2 usuários Americanos com 21 anos e dois brasileiros com 19 anos em estabelecimento americano", () => {
        const brazilian: UserVerifyAge = {
            name: "Dienay BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: UserVerifyAge = {
            name: "Dienay EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);
        expect(result.brazilians.unallowed).toEqual(["Dienay BR", "Dienay BR"]);
        expect(result.americans.allowed).toEqual(["Dienay EUA","Dienay EUA"]);
    })
})

describe("Testes exercício 4", () => {
    test("tamanho de array maior que zero e menor que 2", () => {
        const brazilian: UserVerifyAge = {
            name: "Dienay",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    })

    test("tamanho de array igual a zero", () => {
        const brazilian: UserVerifyAge = {
            name: "Dienay",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino ={
            name: "Balada louca",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.unallowed.length).toBe(0);
    })
})