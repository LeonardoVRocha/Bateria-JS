function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }

}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const IdAudio = `#som_${instrumento}`; 

    tecla.onclick = function() {
        tocaSom(IdAudio)
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
