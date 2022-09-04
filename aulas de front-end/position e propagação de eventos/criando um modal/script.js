const imagensGaleria = document.querySelectorAll('.container img');
const imagemmodal = document.querySelector('.modal img');
const linkmodal = document.querySelector('.modal a');
const modal = document.querySelector('.modal');


function abrirModal(src){
   
    modal.style.display = 'flex';
    imagemmodal.src = src;
    linkmodal.href= src;
    
}

imagensGaleria.forEach(imagem => {
    imagem.addEventListener('click', function (event) {
        abrirModal(event.target.src);

        // event.target: é em quem a gente clicou.

    })
})

// 2° parte

modal.addEventListener('click',function (){
    modal.style.display = 'none';
})

linkmodal.addEventListener('click', function(event){
    event.stopPropagation();
})