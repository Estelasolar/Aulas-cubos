const precos = [100 ,500 , 100, 200, 50 ]


let qtdDeProduto = preco.length;
let soma = 0;
let menor = precos[0]

for(let valor of precos){
    soma+= valor;
}

for(let item of precos ){
    if(item < menor){
        menor = item
    }
}

if (qtdDeProduto >= 5){
    //tem promo
    
    
    console.log(soma- menor)
}else{
    // nao tem promo
    console.log(soma)
}




