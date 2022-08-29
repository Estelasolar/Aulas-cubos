const palpite = "a"
const palavra = "abelha"

let acertos= 0

for(let item of palavra){
    if(item == palpite){
        acertos++
    }
}
console.log(acertos)