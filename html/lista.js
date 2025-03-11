function suma(){
    let imagem = document.getElementById("imagem")
    if(imagem.style.display == "none"){
        imagem.style.display = "block"
}else{
    imagem.style.display = "none"
}}

function tema(){
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black" 
}
function texto(){
    let local = document.getElementById("local")
    mensagem.innerText = "meu nome é",local,"tenho",local,"anos, moro em",local,"e faço curso de",local,"."
}

function Cor(){
    let brasil = document.getElementById("brasil")
    if(brasil.style.color == "green"){
      brasil.style.color = "yellow"  
    }
    else if(brasil.style.color == "yellow"){
        brasil.style.color = "blue"
    }else{
        brasil.style.color = "green"
    }
}
    function nclica(){
    document.getElementById("a")
        alert("Não aperta mais")
    }