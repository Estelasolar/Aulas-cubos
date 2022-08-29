const input="cAPS"
const arrayDaPalavra= input.split("")

if(arrayDaPalavra[0] !== arrayDaPalavra[0].toUpperCase()){

    if(arrayDaPalavra[1]== arrayDaPalavra[1].toUpperCase()){
        let palavra=""
        for(i=0;i<arrayDaPalavra.length;i++ ){
            if(i==0){
                palavra= palavra + arrayDaPalavra[i].toUpperCase()
            }else{
                palavra= palavra + arrayDaPalavra[i].toLowerCase()
            }
        }
        console.log(palavra)
    }else if(arrayDaPalavra[1]!== arrayDaPalavra[1].toUpperCase()){
        console.log(input)
    }

}else{
    if(arrayDaPalavra[1]== arrayDaPalavra[1].toUpperCase()){
        console.log(input.toLowerCase())
    }else if(arrayDaPalavra[1]!== arrayDaPalavra[1].toUpperCase()){
        console.log(input)
    }
}

