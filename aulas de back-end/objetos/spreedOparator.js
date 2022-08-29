const pessoa = {
    nome: "estela",
   idade: 20,
   cidade:"caruaru",
   profissão:"Dev",
};

const endereço={
    rua: "aqui",
    numero: "32",
    bairro: "bairro legal",
}


const objetoJunto= {
    ...pessoa,
    ...endereço,
    novoCampo: 20
}

console.log(objetoJunto);