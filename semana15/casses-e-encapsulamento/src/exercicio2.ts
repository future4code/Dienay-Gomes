import { FileManager } from './FileManager'

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    getDate():string {
        return this.date
    }
    getValue():number {
        return this.value
    }
    getDescription():string {
        return this.description
    }
  }

  const transactions: Transaction = new Transaction(
    "25/08/2020",
    100,
    "comprar coisas"
)

console.log(transactions.getDate())

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction = new Transaction(
        "25/08/2020",
        100,
        "comprar coisas"
    );
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf():string {
        return this.cpf
    }
    getName():string {
        return this.name
    }
    getAge():number {
        return this.age
    }
    getBalance():number {
        return this.balance
    }

  }

const User: UserAccount = new UserAccount(
   "000.000.000-00",
   "Dienay",
   29
)

console.log(User.getName())