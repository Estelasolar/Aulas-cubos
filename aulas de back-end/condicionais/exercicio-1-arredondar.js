const valorProduto = 100;
const  numeroDeParcelas = 3;

if (numeroDeParcelas === 1){
    //a vista - 10% de desconto
    const desconto= valorProduto * 10/100;
    const valorAPagar = valorProduto - desconto
    console.log(`você deve pagar ${valorAPagar}`);
}else{
    //parcelado
    const valorDaParcela = valorProduto / numeroDeParcelas
    console.log(`Você deve pagar ${numeroDeParcelas} pareclas de R$${valorDaParcela.toFixed(2)}` /*usado para arredondar decimais*/)
}