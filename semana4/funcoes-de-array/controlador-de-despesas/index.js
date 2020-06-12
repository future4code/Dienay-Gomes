const totalDeDespesas = []

function cadastraDespesa() {
    const valor = document.getElementById("valor")
    const tipo = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")

    if ((valor.value === "") || (tipo.value === "") || (descricao === "")) {
        alert("Não é possível criar despesa vazia")
        console.log(totalDeDespesas)
    } else {


        const despesa = {
            valor: valor.value,
            tipo: tipo.value,
            descricao: descricao.value
        }

        totalDeDespesas.push(despesa)
        let imprimir = document.getElementById("imprimir")
        imprimir.innerHTML += `<p> R$ ${despesa.valor} na categoria ${despesa.tipo} para ${despesa.descricao}</p>`

        console.log(despesa)
        console.log(totalDeDespesas)
        // valor.value = ""
        // tipo.value = ""
        // descricao.value = ""
        
    }
}


function filtra() {
    const tipoDetalhe = document.getElementById("tipoDetalhe")
    const minimo = document.getElementById("minimo")
    const maximo = document.getElementById("maximo")

    if (tipoDetalhe.value === "casa") {
        const filtrarGastos = totalDeDespesas.filter((item, i, a) => {
            if (item.tipo === "casa") { // = return pokemon.tipo === "grama"
                return true
            }
            return false
        })
            console.log(filtrarGastos)
    }

    if (tipoDetalhe.value === "viagem") {
        const filtrarGastos = totalDeDespesas.filter((item, i, a) => {
            if (item.tipo === "viagem") { // = return pokemon.tipo === "grama"
                return true
            }
            return false
        })
        console.log(filtrarGastos)
    }

    if (tipoDetalhe.value === "rango") {
        const filtrarGastos = totalDeDespesas.filter((item, i, a) => {
            if (item.tipo === "rango") { // = return pokemon.tipo === "grama"
                return true
            }
            return false
        })
        console.log(filtrarGastos)
    }

    if (tipoDetalhe.value === "outros") {
        const filtrarGastos = totalDeDespesas.filter((item, i, a) => {
            if (item.tipo === "outros") { // = return pokemon.tipo === "grama"
                return true
            }
            return false
        })
        console.log(filtrarGastos)
    }
}

function limpaFiltros() {
    tipoDetalhe.value = ""
    minimo.value = ""
    maximo.value = ""
}