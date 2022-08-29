const usuario = [
    {nome: 'joao', idade:23 },
    {nome: 'maria', idade:18 },
    {nome: 'ana', idade:30 },
    {nome: 'rodrigo', idade:17 },
];

const resultado = usuario.find(()=>{
    return usuario.nome === 'joao';
})

console.log(resultado)

