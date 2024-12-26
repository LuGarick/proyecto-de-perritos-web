//conexión y desconexión de base de datos y obtencion de datos sql
const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static(path.join(__dirname,'../public')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'../view/index.html'));
});

app.get('/contactanos.html', (req,res) =>{
    res.sendFile(path.join(__dirname,'../view/contactanos.html'));
});

app.get('/adopcion.html', (req,res) =>{
    res.sendFile(path.join(__dirname,'../view/adopcion.html'));
});

app.get('/sobre_nosotros.html', (req,res) =>{
    res.sendFile(path.join(__dirname,'../view/sobre_nosotros.html'));
});


app.listen(port,() => {
    console.log(`servidor ubicado en http://localhost:${port}`);
});

