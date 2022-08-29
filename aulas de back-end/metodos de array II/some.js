const nomes= ['joao', 'maria','jose', 'rodrigo']

const minhaFunçãoCallback = (nome)=>{
    return nome ==='joao';
}

const resultado = nomes.some(minhaFunçãoCallback);

console.log(resultado);