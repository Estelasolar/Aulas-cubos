const precos= [100, 100, 100]

let soma = 0

for(let preco of precos){
    soma+=preco
}

if(precos.length >= 3){
    let menorPreco= precos[0]
   
    for(let item of precos){
        if(item<=menorPreco){
            menorPreco=item
        }
    }
    let somaComDesconto= soma-(menorPreco/2)
    console.log(somaComDesconto)

}else{
    console.log(soma)
}