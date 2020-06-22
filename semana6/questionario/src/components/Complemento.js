import React from "react"

class Complemento extends React.Component {
    render(){
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <fieldset>
                    <div class="field">
                        <label>5. Por que você não terminou um curso de graduação?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>6. Você fez algum curso complementar?</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                    <label>4. Qual o seu nome?</label>
                        <select>
                            <option>Curso técnico</option>
                            <option>Curso técnico</option>
                            <option>Não fiz curso complementar</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default Complemento