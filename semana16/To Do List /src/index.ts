import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3001, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/
  //Criar Usuário
/**************************************************************/

const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      name: name,
      nickname: nickname,
      email: email
    })
    .into("User")
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.name,
      req.body.nickname,
      req.body.email
    );

    res.status(200).send({
      message: "Success"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

/**************************************************************/
  //Pegar Usuário por id
/**************************************************************/

const getUserById = async (id?: number): Promise<any> => {
  const user = await connection.raw(`
    SELECT * FROM User WHERE id = ${id}
  `)

  return user[0][0]
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await getUserById(id);

    res.status(200).send({
      id: user.id,
      nickname: user.nickname
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

/**************************************************************/
//  Editar usuário 
/**************************************************************/
const editarUser = async (id: number): Promise<void> => {
  await connection
  .update()
}

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await editarUser(id);

    res.status(200).send({
      message: "Success"
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

/**************************************************************/
/**************************************************************/
/**************************************************************/