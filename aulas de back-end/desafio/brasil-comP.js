const palavras = ["aveia", "manha", "ave"]
const primeiraLetra = "b"
const segundaLetra = "r"
let palavrasCertas = [];

for (let palavra of palavras) {
    const letra = palavra[0]
    if (letra === primeiraLetra || letra === segundaLetra) {
        palavrasCertas.push(palavra)

    }
}

if (palavrasCertas.length== 0) {
    console.log("NENHUMA")
} else {
    for (let item of palavrasCertas)
        console.log(item)
}

