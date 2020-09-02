import { Residence } from "./PlaceType";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

  const residential: ResidentialClient = new ResidentialClient("Dienay", 12, 25, "457.789.789-56", 22, "45789-896")

  //   Exercício 4
  //   a. 
  console.log(residential)