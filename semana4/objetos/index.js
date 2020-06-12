const posts = []

function criaPost() {
    const adicionarTitulo = document.getElementById("titulo")
    
    const adicionarAutor = document.getElementById("autor")
    
    const adicionarConteudo = document.getElementById("conteudo")
    
    const adTitulo = document.getElementById("postagem")

    let postTitulo = adicionarTitulo.value
    let postAutor = adicionarAutor.value
    let postConteudo = adicionarConteudo.value

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""


    postagem.innerHTML += `
    <h2> ${postTitulo} </h2>
    <h3> ${postAutor} </h3>
    <p> ${postConteudo} </p>
    `

    console.log(postTitulo)
    console.log(postAutor)
    console.log(postConteudo)

    const post = {
        titulo: '',
        autor: '',
        conteudo: ''
    }

    post.titulo = postTitulo
    post.autor = postAutor
    post.conteudo = postConteudo

    posts.push = post

    console.log(post)
    console.log(posts)
}