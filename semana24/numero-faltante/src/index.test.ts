import { entrada1, numeroFaltante } from ".";

describe("Testando Exercício", ()=>{
    test("Testando o encontrar valor retornado", ()=>{
        const result = numeroFaltante(entrada1)
        expect(result).toBe(47)
    });
})