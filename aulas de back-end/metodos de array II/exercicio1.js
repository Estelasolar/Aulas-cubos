const usuario= [
    {nome:'joao', idade:23},
    {nome:'maria', idade:18},
    {nome:'ana', idade:30},
    {nome:'rodrigo', idade:19},
]

const ficalizarFesta=(arraydeobjetos) =>{
    const resultado = arraydeobjetos.every((objeto)=>{
        return objeto.idade >17;

    })
    if(resultado){
        console.log('festa liberada');
    }else{
        console.log('menor de idade')
    }
}

ficalizarFesta(usuario)