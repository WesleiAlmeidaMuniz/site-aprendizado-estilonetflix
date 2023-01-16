var mostrartextoon = true

function mostrartexto() {
    console.log('Funciona')

    console.log(mostrartextoon)
    
    var pergunta = document.querySelector('div.boxanswernone');
    if (mostrartextoon) {
        pergunta.classList.add('boxanswercontents');
        mostrartextoon = false;
    } else {
        pergunta.classList.remove('boxanswercontents');
        mostrartextoon = true;
    }

    console.log(mostrartextoon)
    return mostrartextoon;
}