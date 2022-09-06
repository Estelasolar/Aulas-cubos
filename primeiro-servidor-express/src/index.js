const express = require('express');

const app = express();

app.get('/home', (req, res)=> {
    res.send('Olá... Esse é o meu primeiro servidor com express ')
});

app.listen(3000);