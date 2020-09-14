//Exercício 1

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string { //Exercício 4
		return this.email
	}

	public getName(): string {
		return this.name
  }
  
  public interoduceYourself(): string { 
    return `Olá, sou ${this.name}. Bom dia!`
  }
}

// const user: User = new User(
//   "1",
//   "dienay@gmail.com",
//   "Dienay",
//   "12345"
// )

// console.log(user)
//a. não é possível imprimir por que não há nenhum getters para o password 
//console.log(user.password)

//b. somente uma vez