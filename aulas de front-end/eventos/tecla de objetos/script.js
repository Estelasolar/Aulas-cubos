
const frutas = document.querySelectorAll('li')

// função que carrega todas as funçoes

function buscarFruta(event) {
    if(!taclowEnter(event.code)){
      return;
    }

   filtrarLista(frutas, event.target.value)

    limparImput(event.target)
}

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


// versao sem refatorar

// const input = document.querySelector('input');
// const frutas = document.querySelectorAll('li')

// function buscarFruta(event) {
//     if(event.code === 'Enter'){
//         frutas.forEach(fruta => {
//             fruta.classList.remove('escondido');

//             if(input.value && fruta.textContent!== input.value){
//                 fruta.classList.add('escondido');
//             };
//         });

//         input.value = ''
//     };
// }
