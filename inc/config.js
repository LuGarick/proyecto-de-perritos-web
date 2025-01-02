// credenciales de base de datos 

const mongoose = require('mongoose');
const url = "mongodb+srv://selvingts20:selvin202011@cluster0.vee30kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> console.log('conectando a la base de datos correctamente'))
    .catch(err => console.error('error en la conexion de la base de datos: ',err));

module.exports = mongoose;