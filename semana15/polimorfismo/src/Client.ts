
export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
  }

const client: Client = {
    name: "Dienay",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// Exercício 1
// a. Foi possível imprimir tudo pois em interface as propriedades são públicas