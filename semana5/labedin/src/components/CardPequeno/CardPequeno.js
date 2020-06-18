import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <span></span>
            <p>
                <b>{props.etiqueta}</b>
                { props.dados }
            </p>
        </div>
    )
}

export default CardPequeno;