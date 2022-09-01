const inputs = document.querySelector ('input');

inputs.forEach(element => {
    inputs.addEventListener('change', function(event){
        const inputModificado = event.target; 
       if(inputModificado.dataset.resposta === inputModificado.value){
        inputModificado.addEventListener('acertou');
       }
    })
});

// primeira versão

// inputs.forEach(element => {
//     inputs.addEventListener('change', function(event){
//         const inputModificado = event.target; 
//         if(inputModificado.id === 'quiz-1' ){
//            if(inputModificado.value ==='4'){
//             inputModificado.classlist.add('acerto')
//            }
//         }else if(inputModificado.id === 'quiz-2'){
//             if(inputModificado.value ==='4'){
//                 inputModificado.classlist.add('acerto')
//                }
//         }
//         else if(inputModificado.id === 'quiz-3'){
//             if(inputModificado.value ==='9'){
//                 inputModificado.classlist.add('acerto')
//                }
//         }else{
//             if(inputModificado.value ==='2'){
//                 inputModificado.classlist.add('acerto')
//                }
//         }
//     })
// });