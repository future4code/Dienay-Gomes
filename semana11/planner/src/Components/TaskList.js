import React, { useState, useEffect } from 'react'
import { Tasks } from './style'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-dienay"

function TaskList() {
    const [list, setList] = useState([])

    useEffect(() => {
        getTesk()
    },[])

    const getTesk = async () => {
        const response = await axios.get(baseUrl)
        setList(response.data)
    }

    const distribuir = dia => {
        const tasksDay = list.filter(item => {
            return item.day === dia
        })
    }

    const domingo = list.filter(item => {
        return item.day === "domingo"
    })
    const segunda = list.filter(item => {
        return item.day === "segunda"
    })
    const terca = list.filter(item => {
        return item.day === "terca"
    })
    const quarta = list.filter(item => {
        return item.day === "quarta"
    })
    const quinta = list.filter(item => {
        return item.day === "quinta"
    })
    const sexta = list.filter(item => {
        return item.day === "sexta"
    })
    const sabado = list.filter(item => {
        return item.day === "sabado"
    })

  return (
    <Tasks>
        <div class="dias">
            <h2>Domingo</h2>
            <ul id="domingo">
            {domingo.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Segunda</h2>
            <ul id="segunda">
                {segunda.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Terça</h2>
            <ul id="terca">
            {terca.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Quarta</h2>
            <ul id="quarta">
            {quarta.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Quinta</h2>
            <ul id="quinta">
            {quinta.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Sexta</h2>
            <ul id="sexta">
            {sexta.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
        <div class="dias">
            <h2>Sábado</h2>
            <ul id="sabado">
            {sabado.map(item => {
                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
    </Tasks>
  )
}

export default TaskList