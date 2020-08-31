import * as fs from 'fs'

let data: string = fs.readFileSync('./tarefas.txt').toString()
console.log(data)