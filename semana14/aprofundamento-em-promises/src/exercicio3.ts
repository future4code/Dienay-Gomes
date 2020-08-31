import axios from 'axios'

// Exercício 3
// a. Não retorna erro
// b. 
// c.

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

type User = {
	id: string;
	name: string;
	email: string;
}

const getAllSubscribers = async (): Promise<User[]> => {
	const users = await axios.get(`${baseUrl}/subscribers/all`)
	console.log(users.data)
    return users.data.map((res:any) => {
		return {
			id: res.id,
			name: res.name,
			email: res.email
		}
	})
}

getAllSubscribers()

