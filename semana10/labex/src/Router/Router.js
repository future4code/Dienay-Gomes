import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import LoginPage from '../LoginPage/LoginPage'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage'

// import { Container } from './styles'

function Router() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                <HomePage />
            </Route>

            <Route exact path="/login" >
                <LoginPage />
            </Route>

            <Route exact path="/create" >
                <CreateTripPage />
            </Route>

            <Route exact path="/list" >
                <ListTripsPage />
            </Route>

            <Route exact path="/details" >
                <TripDetailsPage />
            </Route>

            <Route exact path="/application-form" >
                <ApplicationFormPage />
            </Route>

            <Route path="/" >
                <h3>Eita Giovana, o forninho caiu (404)</h3>
            </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Router
