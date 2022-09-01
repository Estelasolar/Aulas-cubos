sort() = Ordena os elementos do próprio array. Por padrão, a ordenação é de acordo com a tabela unicode.
obs: Opcionalmente, recebe uma função callback que possui dois parâmetros, sendo eles, o primeiro e o segundo elemento a ser comparado. 
!! É importante lembrar que na tabela unicode, números vem antes de letras. !!

ele ordena o proprio array

ex: {
    const array = [2,4,1,20,3,43];
    array.sort(); [1,2,20,3,4,43];
}
 ex2: {
     const array = [2,4,1,20,3,43];
    array.sort((a, b)=>{
        return a - b; 
    });

    return [1,2,3,4,20,43]
 }


 sort(): = Ordenação fornecendo função callback 
 1 - Se o retorno da função for um número menor que zero (negativo), o primeiro parâmetro vem antes do segundo.

2 - Se o retorno da função for um número maior que zero (positivo), o segundo parâmetro vem antes do primeiro.

3 - Se o retorno da função for zero, mantém o primeiro e o segundo parâmetro inalterados. 
 
 localeCompare(): Retorna um número que indica se a string de referência vem antes, depois ou é igual a string comparada.

 ex:{
    const letraA = 'a';
    const letraC = 'c';

    letraA.localeCompare(letraC);
    //a vem antes do c
    //resultado é um valor negativo
     
     letraC.localeCompare(letraA);
    //c vem depois do a
    //resultado é um valor positivo
     
     letraC.localeCompare(letraC);
    //c é igualç a c
    //resultado é zero

 }


reduce() = Executa uma função callback, passada como argumento, para cada elemento do array, que resulta em apenas um valor de retorno. 
A função passada como argumento para o método reduce recebe 4 argumentos.


1 - acumulador - valor inicial (ou o valor do callback anterior)

2 - valorAtual - o valor do elemento atual

3 - ndex - o índice atual

4 - array - o array completo

ex:{

   const array = [0,1,2,3,4];

  const valorReduce array.reduce((acumulador, elementoAtual, indice, array)=>{
    return acumulador + elementoAtual
   })

console.log(valorReduce)
// 10
}

