const produto= [
        {
            nome: "pão de alho",
            precoUnit: 1500,
            quantidade: 3
        },

        {
            nome: "cerveja",
            precoUnit: 1000,
            quantidade: 2
        },

        {
            nome: "drink",
            precoUnit: 1500,
            quantidade: 2
        }
    ]

const cartão = {
    nome: "estela",
    idade: 23,
    produto
    
}

let valor= 0 ;
for(let item of produto){
valor+= item.quantidade * item.precoUnit;
}

console.log(`Sr(a)${cartão.nome}, o total a pagar é R$${(valor/100).toFixed(2)}`)