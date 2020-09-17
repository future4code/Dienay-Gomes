import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase { 
  private static TABLE_NAME: string = "User";
  
  public async createUser(id: string, email: string, password: string): Promise<void> {
    await this.getConnection()
    .insert({
      id,
      email,
      password,
    })
    .into(UserDatabase.TABLE_NAME);
  };
}

const user = new UserDatabase().createUser("12", "jose@gmail.com", "34f4f3")
