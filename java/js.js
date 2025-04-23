function mostrarnome(){
    let nome = document.getElementById("nome").value
    let mensagem =document.getElementById("mensagem")
    mensagem.innerText= "oi " + nome
}

function mostrarIdade(){
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
}

function mostrarcomentario(){
    let comentario = document.getElementById("comentario").value
    let comentarioexibido = document.getElementById("comentarioexibido")
    comentarioexibido.innerText = "comentario:" + comentario
}