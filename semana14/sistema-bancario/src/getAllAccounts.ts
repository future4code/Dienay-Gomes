import { readDatabase } from './index'

readDatabase().map((account: any) => {
    console.log(`
        Nome: ${account.name},
        Idade: ${account.age},
        CPF: ${account.cpf},
        Saldo: ${account.balance}
    `)
})