import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TaskList from './Components/TaskList/TaskList'
import CreateTask from './Components/CreateTask/CreateTask'

function Router() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                <TaskList />
            </Route>

            <Route exact path="/create" >
                <CreateTask />
            </Route>

            <Route path="/" >
                <h3>Eita Giovana, o forninho caiu (404)</h3>
            </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Router
