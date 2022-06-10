'use strict'

module.exports = function(app){
    var owner = require('../controllers/PropietarioController');

app.route('/Owners')
    .get(owner.ListarOwners)
    .post(owner.CrearOwner);

app.route('/Owners/:ownerId')
    .get(owner.leerOwner)
    .put(owner.actualizarOwner)
    .delete(owner.borrarOwner);
};