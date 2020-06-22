import React from "react"

class DadosGerais extends React.Component {
    render(){
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <fieldset>
                    <div class="field">
                        <label>1. Qual o seu nome?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>2. Qual a sua idade?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>3. Qual seu email?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>4. Qual o seu nome?</label>
                        <select>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default DadosGerais