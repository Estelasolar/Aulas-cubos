const inputPesquisa = document.querySelector ('#pesquisa')
const formulario = document.querySelector ('form')

formulario.addEventListener('submit', function(event) {
  if (!inputPesquisa.value) {
    event.preventDefault();
  }
  
})