import React, { useState } from 'react';
import axios from 'axios'
import { Header } from './style';
import { useHistory } from 'react-router-dom'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-dienay"

function CreateTask() {
    const [newTask, setNewTask] = useState('')
    const [day, setDay] = useState('domingo')
    const history = useHistory()

    const onChangeNewTask = event => {
    setNewTask(event.target.value)
    }

    const onChangeDay = event => {
    setDay(event.target.value)
    }

    const createTask = event => {
        event.preventDefault()
        console.log("day")
        const body = {
          "text": newTask,
          "day": day
        }
        axios
        .post(baseUrl, body)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.message)
        })
      }
      const returnToPlanner = () => {
          history.push("/")
      }
  return (
    <Header>
        <div>
            <span onClick={returnToPlanner}>Voltar para o planner</span>
        </div>
        <h1>Minha semana</h1>
        <form onSubmit={createTask}>
            <label htmlFor="tarefa">Nova Tarefa</label>
            <input
                id="Adicionar"
                name="tarefa"
                onChange={onChangeNewTask}
                placeholder="Nova tarefa"
                required
                type="text"
                value={newTask}
            />

            <select onChange={onChangeDay} name="diasDaSemana" id="diasDaSemana" required> 
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda</option>
                <option value="terca">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
                <option value="sabado">Sábado</option>
            </select>

            <button>Criar Tarefa</button>
            
        </form>
    </Header>
  )
}

export default CreateTask;