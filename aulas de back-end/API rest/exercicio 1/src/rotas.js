const express = require('express');
const instrutor = require('./controladores/instrutores');
const aulas = require('./controladores/aulas')

const rotas = express()

rotas.post('/instrutor/:idInstrutor/aulas',aulas.cadastrarAula)
rotas.get('/instrutor/:idInstrutor/aulas',aulas.obterAulasInstrutor)
rotas.get('/aulas',aulas.listarAulas)
rotas.get('/aulas/:id',aulas.obterAulas)



module.exports = rotas