const criptoInput = document.querySelector('#cripto');

criptoInput.addEventListener('change', () => {

    if (!criptoInput.value) {
        return
    }

    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + criptoInput.value + '/ticker/');

    promiseResposta.then((resposta) => {
        const promisebody = resposta.json();

        promisebody.then((body) => {
            valor.textContent = number(body.ticker.high).tofixed(2);
        })
    })
})