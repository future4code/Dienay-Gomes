const totaDeDespesas = []

function cadastraDespesa() {
    const valor = document.getElementById("valor")
    const tipo  = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")
    console.log(valor.value)
    console.log(tipo.value)
    console.log(descricao.value)

    if ((valor.value === "") || (tipo.value === "") || (descricao === "")) {
        alert("Não é possível criar despesa vazia")
        console.log(totaDeDespesas)
    } else {

        
        const despesa = {
            valor : valor.value ,
            tipo : tipo.value ,
            descricao : descricao.value
        }
        
        totaDeDespesas.push(despesa)
        
        console.log(despesa)
        console.log(totaDeDespesas)
        limpaFiltros() 
    }

}

console.log(totaDeDespesas)

function filtra(){
    const valor = document.getElementById("valor")
    const tipo  = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")
}

function limpaFiltros() {
    valor.value = ""
    tipo.value = ""
    descricao.value = ""
}