window.alert("Olá, espero que responda as perguntas com toda a sinceridade do mundo, vamos lá!");

var resposta = window.prompt("Você gostaria de seguir para área de 'Front-end' (digite 1) ou para área de 'Back-end?' (digite 2)");

if (resposta == '1') {
    resposta = window.prompt('Você gostaria de aprender React ou Vue?') 

    if (resposta.toLocaleLowerCase() == 'react') {
        prompt('Você gostaria de se especializar na tecnologia')
    }
}
else {
    if (resposta == '2') {
    window.prompt('Você gostaria de aprender C# ou Java?')
    }
}