const form = document.querySelector('form');
const inputSenha = document.querySelector('#senha');
const inputRepitaSenha = document.querySelector('#repitaSenha');

form.addEventListener('submit'),function(event) {
  if (inputSenha.value !== inputRepitaSenha.value) {
    event.preventDeFoult();
  }
}