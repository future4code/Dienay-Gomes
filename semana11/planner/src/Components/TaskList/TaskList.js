import React, { useState, useEffect } from 'react'
import { Tasks } from './style'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-dienay"

function TaskList() {
    const [list, setList] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTask()
    },[])

    const getTask = async () => {
        const response = await axios.get(baseUrl)
        setList(response.data)
    }

    const handleDays = (day) => {
        const tasksDay = list.filter(item => {
            return item.day === day
        })
        return (
            tasksDay.map(item => {
                return (
                    <li key={item.id}>{item.text}</li>
                )
            })
        )
    }

    const createTask = () => {
        history.push("/create")
    }

    return (
        <Tasks>
            <div>
                <span onClick={createTask} >Criar nova tarefa</span>
            </div>
            <section>
                <div className="dias">
                    <h2>Domingo</h2>
                    <ul id="domingo">
                        {handleDays("domingo")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Segunda</h2>
                    <ul id="segunda">
                        {handleDays("segunda")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Terça</h2>
                    <ul id="terca">
                        {handleDays("terca")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Quarta</h2>
                    <ul id="quarta">
                        {handleDays("quarta")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Quinta</h2>
                    <ul id="quinta">
                        {handleDays("quinta")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Sexta</h2>
                    <ul id="sexta">
                        {handleDays("sexta")}
                    </ul>
                </div>
                <div className="dias">
                    <h2>Sábado</h2>
                    <ul id="sabado">
                        {handleDays("sabado")}
                    </ul>
                </div>
            </section>
        </Tasks>
    )
}

export default TaskList