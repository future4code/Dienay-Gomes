import React from 'react'
import {TopBar, LogoAstro} from './style'
import Logo from '../../images/logo.svg'
import Change from '@material-ui/icons/DoneAll'
import Return from '@material-ui/icons/Reply'

function AppBar(props) {
  return (
    <TopBar>
      {props.trocouTela === true ? <span></span> : <span><Return className="pointer" onClick={props.trocaTela} /></span>}
  
      <h1><LogoAstro src={Logo} alt="Logo" /></h1>

      {props.trocouTela === false ? <span></span> : <span><Change className="pointer" onClick={props.trocaTela} /></span>}
    </TopBar>
  )
}

export default AppBar