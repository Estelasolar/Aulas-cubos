function fachaEtaria(idade){
    if(idade < 21){
return "jovem"
    }else if(idade < 65){
return "adulto(a)"
    }else{
        return "idoso(a)"
    }
}



function apresentar(pessoa ){

    const faixa =  fachaEtaria(pessoa.idade) ;


     console.log(`Ola!meu nome é ${pessoa.nome}, sou um(a) ${faixa} de ${pessoa.idade} anos e sou ${pessoa}.)profissão}. `)

}

const pessoaObj = {
    nome: joao,
    idade: 12,
    profissão: "estudante"
}





apresentar(pessoaObj);