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


//base de datos
const mongoose = require('./config');
const User = require('./table1UserClass');

//poder manejar archivos json
app.use(express.json());

//crear usuario
app.post('/users', async(req,res) =>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//eliminar usuario

