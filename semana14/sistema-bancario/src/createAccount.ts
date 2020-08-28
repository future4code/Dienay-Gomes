import { readDatabase, writeToDatabase } from './index'
import moment from 'moment'

type User = {
    id: moment.Moment,
    name: string,
    age: number,
    cpf: string,
    balance: number,
    spending: any
}

type spending = {
    price: number,
    date: moment.Moment,
    description: string
}

const createAccount = async (user: User):Promise<any> => {
    if (user.age >= 18 ) {
        let add = readDatabase()
        add.push(user)
        writeToDatabase(add)
    } else {
        console.log("Só é possível criar conta para pessoas maiores de 18 anos.")
    }
}

createAccount(
    {
        "id": moment(),
        "name": "Augusto",
        "age": 15,
        "cpf": "555.665.444-32",
        "balance": 0,
        "spending": []
    }
)