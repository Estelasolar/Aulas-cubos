// o index recebe tbm o express e as rotas com as rotas em separado pra poder guiar melhor o usuario 

const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());

app.use(rotas);



app.listen(3000)