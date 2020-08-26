//Exercício 1 a,b
//Exercício 2 a
import moment from 'moment'
moment.locale('pt-br')

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
	{
		name: "Reunião",
		description: "Reunião muito importante",
		startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniãozinha",
		description: "Reunião não muito importante",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

function getAllEvents(allEvents: event[]):void {
    for (let event of allEvents ) {
        console.log(`
            Nome: ${event.name}
            Horário de início: ${event.startAt.format('dddd[,] DD [de] MMMM [de] YYYY, HH:mm')}
            Horário de fim: ${event.finishAt.format('dddd[,] DD [de] MMMM [de] YYYY, HH:mm')}
            Descrição: ${event.description}`)
    }
}

getAllEvents(allEvents)
//Exercício 2 b
//Para utilizar o horário de Londres poderia mudar o fuso com "event.utcOffset('0000').format(...)" dentro da função getAllEvents()

