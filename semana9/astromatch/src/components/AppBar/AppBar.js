import React from 'react'
import {TopBar, LogoAstro, SpanIcon} from './style'
import Logo from '../../images/logo.svg'
import ReturnIcon from '../../images/icons/reply.svg'
import ChangeIcon from '../../images/icons/done.svg'

function AppBar(props) {
  return (
    <TopBar>
      {props.trocouTela === true ? <span></span> : <SpanIcon><img src={ReturnIcon} onClick={props.trocaTela} alt="Return"/></SpanIcon>}
  
      <h1><LogoAstro src={Logo} alt="Logo" /></h1>

      {props.trocouTela === false ? <span></span> : <SpanIcon><img src={ChangeIcon} onClick={props.trocaTela} alt="Matches"/></SpanIcon>}
    </TopBar>
  )
}

export default AppBar