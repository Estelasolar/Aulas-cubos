const notas = [100, 100, 100, 50];
let notaMaior = notas[0];
let notaMenor = notas[0];
let valor = 0;

for (let item of notas) {

    if (item > notaMaior) {
        notaMaior = item;
    }

    if (item < notaMenor) {
        notaMenor = item;
    }
}

for (let i = 0; i < notas.length; i++) {
    valor = valor + notas[i];
}

let MediaAritimetica = (valor - notaMaior - notaMenor) / (notas.length - 2);

console.log(MediaAritimetica);