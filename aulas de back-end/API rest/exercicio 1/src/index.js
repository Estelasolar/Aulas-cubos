const express = require('express');
const rotas = require('./rotas');

app.use(express.json());

const app = express()

app.use(rotas);
app.listen(3000)