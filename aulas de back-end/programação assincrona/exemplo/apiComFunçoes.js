const {getCityFromZipcode, getStateFromZipcode} = require('utils-playground');

// getCityFromZipcode('41256250').then(cidade=>{

// }).catch((erro)=>{
//     console.log(erro);
// })


//---------------------------------------

// const cidade = getCityFromZipcode('41256250')

// cidade.then(cidae=>{
//     console.log(cidade);
// })

// cidade.catch(erro=>{
//     console.log(erro.message);
// })
// console.log(cidade);

//---------------------------------------------

// const cidade = getCityFromZipcode('41256250');

// console.log(cidade);

//-----------------------------------------


// getCityFromZipcode('41256250').then(cidade=>{
//     console.log(cidade);
//     getStateFromZipcode('41256250').then(estado=>{
//         console.log(estado);
//         getStateFromZipcode('41256250').then(estado=>{
//             console.log(estado);
//         })
//     })
// }).catch((erro)=>{
//     console.log(erro);
//  })

// -----------------------------------------

      //async/ await

 (async function(){
    const cidade = await getCityFromZipcode('41256250');
    console.log(cidade);

    const estado = await getStateFromZipcode('41256250');
    console.log(cidade);
 })();


     // padrao normal

// async function teste(){
//     return '123';
// }

  // padrao arrow

    const teste = async ()=>{
        return '123';
    }

console.log(teste());
    