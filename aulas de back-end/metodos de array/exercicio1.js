function iverterString(texto){
    const arrayDeLetras =  texto.split("")
    arrayDeLetras.reverse()
    

    let textoInvertido= "";
    for(let letra of arrayDeLetras){
        textoInvertido = textoInvertido +letra
    }
    console.log(textoInvertido)
}

iverterString("cubos academy")