//Exercício 1
// a. GET /subscribers/all
// b. : Promise<any[]>
import axios from 'axios'

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

// c.
async function getAllSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data
}

getAllSubscribers()