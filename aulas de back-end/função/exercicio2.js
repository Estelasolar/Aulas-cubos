

function fachaEtaria(idade){
    if(idade < 21){
return "jovem"
    }else if(idade < 65){
return "adulto"
    }else{
        return "idoso"
    }
}

const facha= fachaEtaria(18);
console.log(facha)