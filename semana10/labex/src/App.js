import React from 'react'
import './App.css'
import Router from './Router/Router'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#484CAD",
    },
    secondary: {
      main: "#ffffff",
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
