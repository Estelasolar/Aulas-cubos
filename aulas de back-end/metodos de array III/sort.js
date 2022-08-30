const numeros = [1,30,4,80,34];

// numeros.sort();
 

//crecente
// numeros.sort((a, b)=>{
//     if(a<b){
//         return -1;
//     }

//     if(a>b){
//         return 1;
//     }

//     return 0
// })

numeros.sorta((a,b)=>{
    return a - b
})

console.log(numeros);


//-----------------------------------

const usuario = [
    {id: 11, nome: 'joao', idade: 23},
    {id: 2, nome: 'maria', idade: 18},
    {id: 4, nome: 'ana', idade: 30},
    {id: 1, nome: 'rodrigo', idade: 17},
    {id: 123, nome: 'rodrigo', idade: 17},
];

usuario.sort((primeiro,segundo)=>{
    return primeiro.id - segundo.id
});

console.log(usuario)


//-----------------------------------------------

const pessoas = [ 'Joao', 'ana', 'carlos', 'beatriz']

pessoas.sort();

console.log(pessoas)