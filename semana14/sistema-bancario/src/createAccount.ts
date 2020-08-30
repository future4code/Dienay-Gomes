import { readDatabase, writeToDatabase, idade } from './index'
import moment from 'moment'

type User = {
    id: moment.Moment,
    name: string,
    birth: string,
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
    const diff = idade(user.birth)

    let testCpf = readDatabase().filter((cpf: any) => {
        return cpf.cpf === user.cpf
    })

    if (testCpf.length === 0) {
        if (diff >= 18 ) {
            let add = readDatabase()
            add.push(user)
            writeToDatabase(add)
            console.log("Conta criada com sucesso!")
        } else {
            console.log("Só é possível criar conta para pessoas maiores de 18 anos.")
        }
    } else {
        console.log("CPF já está sendo utilizado")
    }
    
}

createAccount(
    {
        "id": moment(),
        "name": "Tico",
        "birth": "23/06/2000",
        "cpf": "545.665.414-32",
        "balance": 0,
        "spending": []
    }
)