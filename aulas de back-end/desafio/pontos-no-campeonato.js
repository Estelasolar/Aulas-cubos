const resultados = [ "V", "E","V","E"]

let total = 0
for(let item of resultados ){
    if( item == "V"){
        total = total + 3
    }else if(item =="E" ){
        total ++
    }

}
console.log(total)