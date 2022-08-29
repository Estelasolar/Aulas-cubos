const usuaruios = [
    {nome:'Guido', sobrenome: 'Cerqueira', idade:31},
    {nome:'Daniel', sobrenome: 'Lopes', idade:29},
    {nome:'Vitor', sobrenome: 'vidal', idade:28},
];

const novoArray = usuario.map((usuario)=>{
    return{
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade
}
})