// const arquivos =[
//     'teste.txt',
//     'foto.png',
//     'contrato.doc',
//     'instalador.exe'
// ];

const antiVirus = (arrayArquivos)=>{
    const resultado = arrayArquivos.some((Arquivos)=>{
        const existeExtensao = arquivo.indexOf('.bat');

        return existeExtensao !== -1;
    })

    if(resultado){
        console.log('viros detectado')
    }else{
        console.log('nenhum virus detectado');
    }
}