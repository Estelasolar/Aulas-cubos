const express = require('express');
const app = express();



app.get('/', (req, res)=>{
    console.log(req);
    res.send('pagina inicial');
});

app.listen(3000, ()=>{
    console.log("servidor iniciado")
    
});