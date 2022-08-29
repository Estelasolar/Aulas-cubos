// um jeito mais facil que vai simplificar quando vc so precisa mudar um valor ocaswionalemnte, quando quiser mudar o valor de uma variavel.
const saldo = 10;
const unidade = (saldo === 1 ? "real" : "reais" );

conhsole.log(`você tem ${saldo} ${unidade}`)

// if(saldo === 1){
//     console.log(`você tem ${saldo} real`);
// }else{
//     console.log(`você tem ${saldo} reais`);
// }

// resumo de ternario:
// (condição ? expre1 : expr2) 