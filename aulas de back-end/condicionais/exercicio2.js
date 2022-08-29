const valorProduto = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
    //a vista - 10% de desconto
    const desconto = valorProduto * 10 / 100;
    const valorAPagar = valorProduto - desconto
    console.log(`você deve pagar ${valorAPagar}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado
    const valorDaParcela = valorProduto / numeroDeParcelas
    console.log(`Você deve pagar ${numeroDeParcelas} x sem juros de pareclas de R$${valorDaParcela.toFixed(2)}` /*usado para arredondar decimais*/)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelas com juros
    const valorComJuros = valorProduto * (1 + 1 / 100) ** numeroDeParcelas.toFixed(2)
    const valorDaParcela = valorComJuros / numeroDeParcelas.toFixed(2);
    console.log(`você em ${numeroDeParcelas}x de R$ ${valorDaParcela}, totalizando R$ ${valorComJuros}`)
} else {
    console.log(" nunmero de parcelas invalidos")
}