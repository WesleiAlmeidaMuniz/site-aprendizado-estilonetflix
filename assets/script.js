var mostrartextoon = true

function mostrartexto(string,number) {
    console.log('Funciona')

    var pergunta = document.querySelectorAll(string);

    console.log(pergunta)
    
    if (mostrartextoon) {
        pergunta[number].classList.add('boxanswercontents');
        mostrartextoon = false;
    } else {
        pergunta[number].classList.remove('boxanswercontents');
        mostrartextoon = true;
    }

    return mostrartextoon;
}