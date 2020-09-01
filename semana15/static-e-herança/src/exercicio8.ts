//Exercício 8
import { Employee } from "./exercicio6"

export class Seller extends Employee{
// a.
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password, admissionDate, baseSalary)
    }
}

const seller: Seller = new Seller(
    "1",
    "dienay@gmail.com",
    "Dienay",
    "1234455",
    "12/05/2020",
    4000
)

console.log(seller)
