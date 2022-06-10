'use strict'

module.exports = function(app){
    var auto = require('../controllers/AutosController');

app.route('/autos')
    .get(auto.ListarAutos)
    .post(auto.CrearAuto);

app.route('/autos/:autoId')
    .get(auto.leerAuto)
    .put(auto.actualizarAuto)
    .delete(auto.borrarAuto);
};