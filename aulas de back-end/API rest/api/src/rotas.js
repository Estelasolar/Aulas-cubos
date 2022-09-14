
// as rotas preciam receber tanto o expressas para utilizar as funçoes do json quanto receber as funçoes callbacks para funcionar o que eles estao chamando
const express = require('express');
const instrutor = require('./controladores/instrutores');

const rotas = express()

rotas.get('/instrutores', instrutor.listarInstrutores);
rotas.get('/instrutores/:id', instrutor.obterInstrutor);
rotas.post('/instrutores', instrutor.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutor.editarInstrutor);
rotas.patch('/instrutores/:id/status',instrutor.atualizarInstrutores )
rotas.delete('/instrutores/:id', instrutor.deletarInstrutor)


module.exports = rotas