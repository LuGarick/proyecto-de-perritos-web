//conexión y desconexión de base de datos y obtencion de datos sql
const express = require('express');
const app = express();
const port = 3030;


app.get('/', (req,res) =>{
    res.send("hola mundo");
})

app.listen(port,() => {
    console.log(`servidor ubicado en http://localhost:${port}`);
})

