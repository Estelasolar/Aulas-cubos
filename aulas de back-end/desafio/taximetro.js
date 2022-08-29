const min=25
const Km=11.5

let tempoAMais= min -20
let KmAMais= Km - 10


if(tempoAMais<=0 && KmAMais<=10 ){

    let valor= min * 50 + Km * 70
    console.log(valor)
}else if(tempoAMais>0 || KmAMais >0){
    let valorDoTempo=0;
    let valorDeDistancia=0;
    
    if(tempoAMais>0){
        valorDoTempo = 20 * 50 + tempoAMais * 30
    }else{
        valorDoTempo =min * 50
    }

    if(KmAMais>0){
        valorDeDistancia = 10*70 + KmAMais * 50
    }else{
        valorDeDistancia =Km*70
    }

    console.log(Math.floor(valorDeDistancia+valorDoTempo))
}
    