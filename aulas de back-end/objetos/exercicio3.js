const cartão = {
    nome: "estela",
    idade: 23,
    produto: [
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
}

const array = [{}, {}, {}]

console.log(cartão.nome);
console.log(cartão.idade);

// cartão.idade=30;
cartão["idade"]= 30
console.log(cartão.idade);

console.log(cartão.produto[0].nome);

console.log(cartão.produto[0].precoUnit)

console.log(cartão.produto[cartão.produto.length -1].precoUnit)