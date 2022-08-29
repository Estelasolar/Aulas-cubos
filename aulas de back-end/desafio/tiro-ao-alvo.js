const disparos = [0, 10, 50, 70, 80, 30];
let tirosClassificados=0;

for(let item of disparos){
    if(item > 70 ){
        tirosClassificados++
    }
}

if( tirosClassificados>=3){
    console.log(tirosClassificados)
}else{
    console.log("ELIMINADO")
}