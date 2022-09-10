const express = require('express');
const app = express();

const professores = [
    { id: 1, nome: 'guido', stack: 'back' },
    { id: 2, nome: 'dani', stack: 'front' },
    { id: 3, nome: 'diego', stack: 'front' },
    { id: 4, nome: 'vidal', stack: 'back' }
]


//localhost:3000/professores
app.get('/professores', (req, res) => {
   const{stack} = req.query;
    let resultado = professores;

   if(stack){
    resultado = professores.filter((professor)=>{
        return professor.stack === stack
    })
   }
    res.send(resultado);
});

//localhost:3000/professores/id
app.get('/professores/:id', (req, res) => {
    const professoreEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)

    })
    res.send(professoreEncontrado);
});

app.listen(3000);