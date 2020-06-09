function adicionaTarefa() {
    const adicionarTarefa = document.getElementById("textoAdicionar")
    let tarefa = adicionarTarefa.value

    const dias = document.getElementById("diasDaSemana")
    let escolherDia = dias.value

    if (tarefa === "") {
        alert("Não é possível adicionar uma tarefa vazia.")
        adicionarTarefa.focus()
    }

    if (escolherDia === "domingo") {
        const itens = document.getElementById("domingo")
        domingo.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else if (escolherDia === "segunda") {
        const itens = document.getElementById("segunda")
        segunda.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else if (escolherDia === "terca") {
        const itens = document.getElementById("terca")
        terca.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else if (escolherDia === "quarta") {
        const itens = document.getElementById("quarta")
        quarta.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else if (escolherDia === "quinta") {
        const itens = document.getElementById("quinta")
        quinta.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else if (escolherDia === "sexta") {
        const itens = document.getElementById("sexta")
        sexta.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    } 
    
    else {
        const itens = document.getElementById("sabado")
        sabado.innerHTML += `<li> ${tarefa} </li>`
        adicionarTarefa.value = ""
        adicionarTarefa.focus()
    }
}