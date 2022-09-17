const themeButton = document.querySelector('.light');
const body = document.querySelector('body');

const temaInicial = localStorage.getItem('tema')

themeButton.textContent = themeButton.textContent === 'claro' ?'☀️' : '🌛';
body.style.setProperty('--cor-de-fundo', temaInicial=== "claro" ? '#fff': '#000')
body.style.setProperty('--cor-de-texto', temaInicial=== "claro" ? '#000': '#fff')

themeButton.addEventListener('click', ()=>{
    themeButton.textContent = themeButton.textContent === '☀️' ? '🌛':'☀️';

    localStorage.setItem('tema', temaInicial === 'claro'? 'escuro': 'claro')


    const novoTemaDeFundo = body.style.getPropertyValue('--cor-de-fundo')=== '#000'?'#fff':'#000'
    const novoTemaDetexto = body.style.getPropertyValue('--cor-de-texto')=== '#fff'?'#000':'#fff'

    body.style.setProperty('--cor-de-fundo', novoTemaDeFundo)
    body.style.setProperty('--cor-de-texto', novoTemaDetexto)
    

})


// themeButton.addEventListener('click', ()=>{
//     themeButton.textContent = themeButton.textContent === '☀️' ? '🌛':'☀️';


//     const novoTemaDeFundo = body.style.getPropertyValue('--cor-de-fundo')=== '#000'?'#fff':'#000'
//     const novoTemaDetexto = body.style.getPropertyValue('--cor-de-texto')=== '#fff'?'#000':'#fff'

//     body.style.setProperty('--cor-de-fundo', novoTemaDeFundo)
//     body.style.setProperty('--cor-de-texto', novoTemaDetexto)
    

// })