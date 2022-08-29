const paises=['brasil','Argentina', 'Holanda', 'EUA', 'Espanha']
console.log(paises);

// remover pais
paises.pop();
console.log(paises);

//adicionar pais no começo da lista

paises.unshift('inglaterra');
console.log(paises);

//remover um pais no inisio da lista

paises.shift();
console.log(paises)

//imprimir o ultimo pais d alista
const ultimo= paises[paises.length - 1]
console.log(ultimo)
console.log(paises[3])

// imprima o segundo item da lista
console.log(paises[1])

// pais de indice 2 na tela

console.log(paises[2])