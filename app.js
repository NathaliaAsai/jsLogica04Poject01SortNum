function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de =parseInt(document.getElementById('de').value);
    let ate = parseInte(document.getElementById('ate').value);

    let sorteados = []; //array para guardar os elemntos
    let numero;

    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros sorteados} </label>`;
    alterarStatusBotao();

    
}

function obterNumeroAleatorio(min, max){ //numero aleatorio
    return Math.floor(math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar () {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros sorteados} </label>`;
    alterarStatusBotao();
}