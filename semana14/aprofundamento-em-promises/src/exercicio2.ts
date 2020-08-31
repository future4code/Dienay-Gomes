import axios from 'axios'

// Exercício 2
// a.
// Na função nomeada 'async' vem antes da palavra 'function', e o retorno/promise vem logo após os parênteses
// Na arrow function o 'async' vem antes dos parênteses, e o retorno/promise vem logo após os parênteses

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

// b. 
const getAllSubscribers = async (): Promise<any[]> => {
	const users = await axios.get(`${baseUrl}/subscribers/all`)
	console.log(users.data)
    return users.data
}

getAllSubscribers()

