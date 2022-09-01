const alerta = document.querySelector ('.alerta')


function mostraralerta() {
   alerta.classList.remove('escondida');
}

function esconderAlerta(){
    alerta.classList.add('escondida')
}