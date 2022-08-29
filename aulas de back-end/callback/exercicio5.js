const microondas = (tempo)=>{
    let numero = 1;
    console.log("iniciou...");

    
    const contador= ()=>{
            console.log(numero)
            numero++

            if(numero > tempo / 1000){
                console.log('Finalizou');
                clearInterval(id);
            }
    }
    
    
    const id = setInterval(contador,tempo)
}


microondas(5000)