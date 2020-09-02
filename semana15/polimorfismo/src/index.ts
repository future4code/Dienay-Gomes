import { Client } from "./Client"
import { ResidentialClient } from "./ResidentialClient"
import { CommercialClient } from "./CommercialClient"
import { IndustrialClient } from "./IndustrialClient"

class ClientManager {
  private clients: Client[] = []

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public registerClient(client: Client): void {
    this.clients.push(client)
  }
}

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient(...)
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient(...)
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient(...)
clientManager.registerClient(industrialClient)