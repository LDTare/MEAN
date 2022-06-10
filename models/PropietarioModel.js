'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = Schema({
    Dpi: Number,
    Nombre: String,
    Apellido: String,
    Telefono: Number,
    Estado: Number
},
{
    versionKey: false
});


//Export the model
module.exports = mongoose.model('Owners', OwnerSchema);