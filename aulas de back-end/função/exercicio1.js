const pessoaObj = {
    nome: joao,
    idade: 12,
    profissão: "estudante"
}


function apresentar(pessoa ){
    if (pessoa.idade <25){
        console.log(`Ola!meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos e sou ${pessoa}.)profissão}. `)
}else if(pessoa.idade <65){
    console.log(`Ola!meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa}.)profissão}. `)
}else{
    console.log(`Ola!meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa}.)profissão}. `)
}
}


apresentar(pessoaObj);