const informarDadosUsuario= (callback) => {
    const nome= 'Etela'
    const idade = 23
    callback(nome, idade)
}

const funcaoCallback = (nome, idade) => {
    console.log(`Olá, ${nome}`);

    if(idade){
        const anoAtual = new date().getfullyear();
        console.log(`você nasceu em ${anoAtual - idade}`);
    }
}

informarDadosUsuario(funcaoCallback)