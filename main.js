'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

const coresTraduzidas = {
    'azul': 'blue',
    'vermelho': 'red',
    'verde': 'green',
    'amarelo': 'yellow'
}

function trocarCor() {
    const inputCor = document.getElementById('cor').value.toLowerCase()

    const corFinal = coresTraduzidas[inputCor] || inputCor

    document.body.style.backgroundColor = corFinal
}

botaoTrocarCor.addEventListener('click', trocarCor)