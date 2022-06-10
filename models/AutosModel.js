'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutoSchema = Schema({
    Placa: String,
    Modelo: String,
    Marca: String,
    Color: String,
    Anio: Number,
    Estado: Number
},
{
    versionKey: false
});


//Export the model
module.exports = mongoose.model('Autos', AutoSchema);