const escolhajogador = prompt("escolha pedra papel ou tesoura:")

const escolhapc = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]

alert(`você escolheu ${escolhajogador}`)
alert(`o computador escolheu ${escolhapc}`)

if (escolhapc==escolhajogador)
    alert("emapte")
else if(escolhajogador == "pedra" && escolhapc == "tesoura"){
    alert("você venceu") 
}
else if(escolhajogador == "tesoura" && escolhapc == "papel"){
    alert("você venceu")
}
else if(escolhajogador == "papel" && escolhapc == "pedra"){
    alert("você venceu")
}
else{
    alert("você perdeu")
}