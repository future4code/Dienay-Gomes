import axios from 'axios'

// Exercício 4
// a. void, por que ela não retorna nada.
// b. 

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

const main = async () => {
	try {
		type body = {
			title: string,
			content: string,
			date: number
		}
		
		const createNews = async (body: body): Promise<void> => {
			try {
				const res = await axios.put(`${baseUrl}/news`,body)
				console.log(res.data)
			}
			catch (err) {
				console.log(err.message)
			}
		}
		
		createNews({
			title: "Baleia baleia outra baleia",
			content: "Baleia alveja mais uma baleia com disparo de arma de paindball",
			date: Date.now()
		})
	}
	catch (err) {
		console.log(err.message)
	}
}

main()