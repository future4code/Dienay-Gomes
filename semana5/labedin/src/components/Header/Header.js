import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <header>
            <h1>{props.logo}</h1>
            <input type="text" placeholder="Pesquisar" />
        </header>
    )
}

export default Header;