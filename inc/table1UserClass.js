//tabla de datos para usuarios en inicio de sesión

const mongoose = require('mongoose');

//definicion de esquemas
const userClient = new mongoose.Schema({
    name:{type:String, require: true},
    country:{type:String,require: true},
    age:{type:Number, require:true},
    email:{type:String, require: true},
    password:{type:String, require:true}
})
//crear el modelo
const User = mongoose.model('User',userClient);

module.exports = User;