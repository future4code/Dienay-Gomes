//Exercício 2
import { User } from "./exercicio1"

class Customer extends User {
	public purchaseTotal: number = 0;
	private creditCard: string;
  
	constructor(
	  id: string,
	  email: string,
	  name: string,
	  password: string,
	  creditCard: string
	) {
	  super(id, email, name, password);
	  console.log("Chamando o construtor da classe Customer");
	  this.creditCard = creditCard;
	}
  
	public getCreditCard(): string {
	  return this.creditCard;
	}
  }

  const customUser: Customer = new Customer(
	  "1",
	  "dienay@gmail.com",
	  "Dienay",
	  "12323",
	  "2334234523455578"
	)

//a. uma única vez
//b. uma única vez
// console.log(customUser)

//Exercício 3
//   console.log(customUser)
//a. não por que o password está como privado e não tem getters para ele
// console.log(customUser.password)

//Exercício 4
console.log(customUser.interoduceYourself())