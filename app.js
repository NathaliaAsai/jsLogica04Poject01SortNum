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

    
}

function obterNumeroAleatorio(min, max){ //numero aleatorio
    return Math.floor(math.random() * (max - min + 1)) + min;
}