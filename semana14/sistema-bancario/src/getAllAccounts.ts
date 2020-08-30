import { readDatabase } from './index'
import moment from 'moment'
moment.locale("pt-br")

const birth = (date: any, stringDate: string) => {
    let birth = moment(date, stringDate)
    return birth.format("DD/MM/YYYY")
}

readDatabase().map((account: any) => {
    console.log(`
        Nome: ${account.name},
        Nascimento: ${birth(account.birth, "DD/MM/YYYY")},
        CPF: ${account.cpf},
        Saldo: ${account.balance}
    `)
})
