const callbackIMC = (altura, peso, funcaoCallback) =>{
    const imc = peso/(altura * altura );
    let faixa;

    if(imc < 18){
        faixa = 'Desnutrição';
    }else if(imc >= 18 && imc <= 25){
        faixa = 'Nornal';
    }else{
        faixa = 'Sobrepeso'
    }

    funcaoCallback(imc,faixa)
}

callbackIMC(1.87, 100, (imc, faixa)=>{
    console.log(`IMC: ${imc}`)
    console.log(`Faixa correspondente: ${faixa}`)
})