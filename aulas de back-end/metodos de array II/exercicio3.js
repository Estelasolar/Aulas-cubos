const carro = [
    {
        nome:'corola',
        marca:'toyota',
        ano:'2020',
        cor:'prata'
    },
    {
        nome:'argo',
        marca:'fiat',
        ano:'2021',
        cor:'preto'
    },
    {
        nome:'ranger',
        marca:'ford',
        ano:'2021',
        cor:'prata'
    },
    {
        nome:'hilux',
        marca:'toyota',
        ano:'2018',
        cor:'branco'
    },
] ;

const buscarCarro = (marca, arrayCarros) => {

    return arrayCarros.find((carro)=>{
        return carro.marca === marca
    })

}

const resultado = buscarCarro('toyota', carro);
console.log(resultado)