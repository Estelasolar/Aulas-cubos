const palavra = 'Alemanha';

let encontrado= false;

for(let letra of palavra){
    if (letra === 'h'){
        console.log('tem a letra h');
        encontrado = true;
        break;
    }
    
    //console.log(letra);
}

if(!encontrado){
    console.log('não t5em h')
}

