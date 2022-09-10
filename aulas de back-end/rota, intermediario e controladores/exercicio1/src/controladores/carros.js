const carros = require('../bancodedados');


const listagemCarro = (req, res)=>{
    const{marca,cor}= req.query;
    let resultados = carros

    if(marca){
        resultado = resultado.filter((carro)=>{
            carro.marca === marca
        });
    }
    
    if(cor){
        resultado = resultado.filter((carro)=>{
            carro.cor === cor
        });
    }

    res.send(resultado)
};

const obterCarro = (req, res)=>{
    const {id}= req.params
    
    const carroEncontrado = carros.find((carro)=>{
        return carro.id === Number(id);
    })

    res.send(carroEncontrado)
}

module.exports ={
    listagemCarro,
    obterCarro,
}