// Exercício 3
import { Place } from "./Place"

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    cep: string
  ) {
    super(cep)
  }

  public getresidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep)
  }

  public getfloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    cep: string
		) {
	    super(cep)
  }

  public getmachinesQuantity(): number {
    return this.machinesQuantity
  }
}

const residence: Residence = new Residence(2, "98654-321")
const commerce: Commerce = new Commerce(3, "45698-123")
const industry: Industry = new Industry(1, "65489-256")

console.log(residence)
console.log(commerce)
console.log(industry)