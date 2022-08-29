function imprimir(dia,mes,ano){
    const diaFormatado = String(dia).padStart(2,'0+')
    const mesFormatado = `${mes}`.padStart(2,'0')

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`)

}

imprimir(1,1,2022)