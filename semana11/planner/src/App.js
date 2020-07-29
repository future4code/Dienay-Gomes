import React from 'react';
import { Container, Header } from './appStyle.js'
import TaskList from './Components/TaskList'

function App() {
  return (
    <Container>
      <Header>
      <h1>Minha semana</h1>
        <div>
            <label for="tarefa">Nova Tarefa</label>
            <input type="text" name="tarefa" id="Adicionar "/>

            <select name="diasDaSemana" id="diasDaSemana">
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda</option>
                <option value="terca">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
                <option value="sabado">Sábado</option>
            </select>

            <button onclick="">Criar Tarefa </button>
            
        </div>
      </Header>
      <TaskList />
    </Container>
  );
}

export default App;
