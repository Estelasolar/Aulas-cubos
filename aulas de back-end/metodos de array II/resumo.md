every() = testa se todos os elementos do array passam pelo teste implementado na função callback, passada como argumento e retorna um buleano(verdadeiro ou falso)

ex:{
    const numeros ={1,2,3,4};

    numeros.every((elementoAtual)=>{
        return elementosatual < 5
    })
    return true
}


some() = testa  se ao menos um dos elementos do array passam pelo teste implementado na função callback, passada como argumento e retorna u buleano(true or false)

ex:{
    const letras = ['a','b','c'];

    letras.some((elementoAtual)=>{

        return elementoAtual === 'c';
        
    })
    return true 
}

find() = retorna o primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. caso contrário, retorna undefined. 

ex:{
     const numeros =[1,2,3,4];

     numero.find((elementoAtual)=> {
        return elementAtual> 2;
     });

     return 3
}

findIndex() = retrna o indice do primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. caso contrario, retorna -1

ex:{
    const numeros =[1,2,3,4,5]

    numeros.findIndex((elementoAtual)=>{
        return elemento === 5
    })
    return 4
}

filter() = Cria um novo array com todos os elementos correspondentes a condição implementada na função callback, passada como argumento.

ex:{
    const numeros =[1,2,3,4,5]
    
    numeros.filter((elementoAtual)=>{
        return elemento >2;
    })
    return [3,4,5]
}

map() = Executa a função callback passada como argumento para cada elemento do array e retorna um novo array como resultado.

ex:{
    const numeros =[1,2,3]

     numeros.map((elementoAtual)=>{
        return elemento * 2;
    })

    dobro = [2,4,6]
    numeros = [1,2,3]

}