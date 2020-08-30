import * as fs from 'fs'
import moment from 'moment'

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString()
    return JSON.parse(fileData)
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message)
    return []
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2)
    fs.writeFileSync('./data.json', dataAsString)
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
}

export function idade(nacimento: string):any {
    const today = moment()
    const dateBirth = moment(nacimento, "DD/MM/YYYY")
    const diffInYears = today.diff(dateBirth, "years")
    return diffInYears
}

//console.log(idade("23/12/2000"))
