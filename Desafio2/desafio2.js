var nome = window.prompt ("Qual o seu nome?")
var idade = window.prompt ("Quantos anos você tem?")
var linguagem = window.prompt ("Qual linguagem de programação você está estudando?")

var campo = document.getElementById ("campo")

campo.innerHTML= `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`


var resposta = window.prompt (`Você gosta de estudar ${linguagem}?`)


if (resposta.toLowerCase() == "sim") {
    alert ("Muito bom! Continue estudando e você terá muito sucesso.")
}
else{ 
    if(resposta.toLocaleLowerCase() == "não") {
        alert ("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}