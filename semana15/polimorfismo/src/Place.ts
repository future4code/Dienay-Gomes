export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep
  }
}

// Exercício 2
// a. Não é possível criar uma instância de uma classe abstrata.
// const place: Place = new Place()
// b. extender a outra classe