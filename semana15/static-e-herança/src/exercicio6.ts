//Exercício 6
//a. apenas uma vez
//b. getAdmissionDate e getBaseSalary
import { User } from "./exercicio1"

export class Employee extends User{
    protected admissionDate: string
    protected baseSalary: number

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): string {
		return this.admissionDate
	}

	public getBaseSalary(): number {
		return this.baseSalary
    }
    
    public calculateTotalSalary(): number {
        return this.baseSalary + 400
    }
}

const employee: Employee =new Employee(
    "1",
    "dienay@gmail.com",
    "Dienay",
    "1234556",
    "23/01/2020",
    4000
)

console.log("Admissão: ", employee.getAdmissionDate())
console.log("Base salarial: ", employee.getBaseSalary())
console.log("Salário com benefícios: ", employee.calculateTotalSalary())