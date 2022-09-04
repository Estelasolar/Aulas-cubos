const botaoInscrever= document.querySelector('.btn');
const modal= document.querySelector('.modal');

const botaoModal= document.querySelectorAll('.modal button');
const botaoConfirmar= document.querySelector('.confirmar');

botaoInscrever.addEventListener('click', inscrever);


botaoModal.forEach(botao =>{
    botao.addEventListener('click',function(){
        modal.classList.add('escondido');
    });
})


botaoConfirmar.addEventListener('click',function(){
    botaoInscrever.textContent = 'INSCREVER-SE'
    botaoInscrever.classList.remove('inscrito')

    botaoInscrever.addEventListener('click', inscrever);
});

function inscrever (event){
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', inscrever );
    botaoClicado.addEventListener('click', function(){
        modal.classList.remove('escondido');
    })

}

// função certinha de inscrever- 1°


// const botaoInscrever= document.querySelector('.btn');
// const modal= document.querySelector('.modal');

// const botaoCancelar= document.querySelector('.cancelar');
// const botaoConfirmar= document.querySelector('.confirmar');




// botaoInscrever.addEventListener('click', inscrever);

// botaoCancelar.addEventListener('click',function(){
//     modal.classList.add('escondido');
// });

// botaoConfirmar.addEventListener('click',function(){
//     botaoInscrever.textContent = 'INSCREVER-SE'
//     botaoInscrever.classList.remove('inscrito')
//     modal.classList.add('escondido');

//     botaoInscrever.addEventListener('click', inscrever);
// });

// function inscrever (event){
//     const botaoClicado = event.target;

//     botaoClicado.textContent = 'INSCRITO';
//     botaoClicado.classList.add('inscrito');

//     botaoClicado.removeEventListener('click', inscrever );
//     botaoClicado.addEventListener('click', function(){
//         modal.classList.remove('escondido');
//     })

// }