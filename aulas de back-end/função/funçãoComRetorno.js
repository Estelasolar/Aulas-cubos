// verificar se uma pessoa é maior de idae

function verificarMiorIdade(idade){
    if (idade >= 18) {
        return true //depois do return nada é executado. pq ele volta o valor 
    }else{
        return false;

    }

}

const valorRetornado = verificarMiorIdade(20);
console.log(valorRetornado)