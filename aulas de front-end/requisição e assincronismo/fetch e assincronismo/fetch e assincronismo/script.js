const cepInput = document.querySelector('#cep');
const ufInput = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', ()=>{

    // if(cepInput.value !== 8){
    //     console.log('ERRO')
    //     return
    // }

   const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value +'/json/');

   resposta.then((resposta)=>{
   const promiseBody = resposta.json();

   if(!resposta.ok){
    console.log('ERRO');
    return
}

   promiseBody.then((body)=>{

    if(body.erro){
        console.log('ERRO');
        return
    }
    ufInput.value = body.uf;
    cidadeInput.value = body.localidade;
    ruaInput.value = body.logradouro;
   })
   })

});