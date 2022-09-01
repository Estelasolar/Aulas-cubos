const inputs = document.querySelectorAll('inputs')
const frutas = document.querySelectorAll('li')

inputs.forEach(inputs => {
    inputs.addEventListener('keydown',function(event) {
        if(!taclowEnter(event.code)){
            return;
            filtrarLista(frutas, event.target.value)

          }
    });

    inputs.addEventListener('keydown',function(event) {
        limparImput(event.target)
    })
});

// funçoes

function taclowEnter(tecla){
    return tecla === 'Enter'
}

function filtrarLista(lista, filtro){
    lista.forEach(item => {
        item.classList.remove('escondido');

        if(filtro && item.textContent!== filtro){
            item.classList.add('escondido');
        };
    });
}

function limparImput(input){
    input.value = '';
}

