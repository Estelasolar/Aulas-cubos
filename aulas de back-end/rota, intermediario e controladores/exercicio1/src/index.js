const express = require('express')
const {listagemCarro, obterCarro} = require('./controladores/carros')
const {validarSenha} = require('./intermediario')

const app = express();

app.use(validarSenha)


app.get('/carros', listagemCarro );
app.get('/carros/:id', obterCarro );



app.listen(3000);