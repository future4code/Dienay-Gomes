import React from 'react'
import {
  render,
  fireEvent,
  wait
} from '@testing-library/react'
import App from './App'
import axios from 'axios'

axios.get = jest.fn().mockResolvedValue({
  data: []
})

axios.post = jest.fn().mockResolvedValue()

axios.put = jest.fn().mockResolvedValue()

describe('Planner', () => {
  test('Testa renderização inicial', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        text: 'Comprar pão',
        day: 'segunda'
      }]
    })

    const { getByText, findByText } = render(<App />)
    const spanCreate = getByText(/Criar nova tarefa/i)
    expect(spanCreate).toBeInTheDocument()
    const novaTarefa = await findByText(/Comprar pão/i)
    expect(novaTarefa).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-dienay")
  })

  test('Ir para página criar nova tarefa e renderiza-la', () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const spanCreate = getByText(/Criar nova tarefa/i)
    fireEvent.click(spanCreate)
    const spanGoBack = getByText(/Voltar para o planner/i)
    expect(spanGoBack).toBeInTheDocument()
    const input = getByPlaceholderText(/Nova tarefa/)
    expect(input).toBeInTheDocument()
    const button = getByText(/Criar Tarefa/)
    expect(button).toBeInTheDocument()
  })

  test('Criar nova tarefa', async () => {
    axios.post = jest.fn().mockResolvedValue()
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    const { getByPlaceholderText, getByText } = render(<App />)
    const input = getByPlaceholderText(/Nova tarefa/)
    fireEvent.change(input, {
      target: {
        value: "Lavar roupa"
      }
    })

  

    const button = getByText(/Criar Tarefa/i)
    fireEvent.click(button)
    const task = getByText(/Voltar para o planner/i)
    expect(task).toBeInTheDocument()
   
    const spanCreate = getByText(/Voltar para o planner/i)
    expect(spanCreate).toBeInTheDocument()
  })
  
  test('Voltar para página de Tarefas', () => {
    const { getByText } = render(<App />)
    const spanGoBack = getByText(/Voltar para o planner/i)
    expect(spanGoBack).toBeInTheDocument()
    fireEvent.click(spanGoBack)
    

    const spanCreate = getByText(/Criar nova tarefa/i)
    expect(spanCreate).toBeInTheDocument()
  })
})