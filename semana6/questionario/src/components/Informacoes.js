import React from "react"

class Informacoes extends React.Component {
    render(){
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <fieldset>
                    <div class="field">
                        <label>5. Qual curso?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>6. Qual a unidade de ensino?</label>
                        <input type="text" />
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default Informacoes