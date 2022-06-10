'use strict'

const owner = require('../models/PropietarioModel');

var mongoose = require('mongoose'),
Owner = mongoose.model('Owners');

exports.ListarOwners = function(req, res) {
    Owner.find({}, function (err, owner){
        if(err)
            res.send(err);
        res.json(owner);
    });
};

exports.CrearOwner = function(req, res){
    var newOwner = new Owner(req.body);
    newOwner.save(function (err, owner){
        if(err)
            res.send(err);
        res.json(owner);
    });
};

exports.leerOwner = function (req, res) {
    Owner.findById(req.params.ownerId, function (err, owner) {
      if (err)
        res.send(err);
      res.json(owner);
    });
  };
  
  exports.actualizarOwner = function (req, res) {
    Owner.findOneAndUpdate({ _id: req.params.ownerId }, 
    req.body, { new: true }, function (err, owner) {
      if (err)
        res.send(err);
      res.json(owner);
    });
  };


  exports.borrarOwner = function (req, res) {
    Owner.deleteOne({ _id: req.params.ownerId }, function (err, owner) {
      if (err)
        res.send(err);
      res.json({ message: 'Propietario borrado exitosamente' });
    });
  };