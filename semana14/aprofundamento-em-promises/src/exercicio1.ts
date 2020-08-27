import axios from 'axios'

//Exercício 1
// a. GET /subscribers/all
// b. : Promise<any[]>
// c.

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

async function getAllSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
	console.log(users.data)
	return users.data
}

getAllSubscribers()

