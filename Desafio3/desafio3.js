window.alert("Olá, espero que responda as perguntas com toda a sinceridade do mundo, vamos lá!");

var resposta = window.prompt("Você gostaria de seguir para área de 'Front-end' (digite 1) ou para área de 'Back-end?' (digite 2)");

    if (resposta == '1') {
    linguagem = window.prompt('Você gostaria de aprender React ou Vue ?') 

}

    else {
    if (resposta == '2') {
    linguagem = window.prompt('Você gostaria de aprender C# ou Java?')
    }
}

else {
    alert('Você não inseriu um dado válido!')
}

var especializacaoOuFullstack = prompt ('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack')

    if (especializacaoOuFullstack == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${resposta}!`)
}

    else {
    if (especializacaoOuFullstack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`)
    }
}

else {
    alert('Você não inseriu um dado válido!')
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
