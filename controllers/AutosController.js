'use strict'

const auto = require('../models/AutosModel');

var mongoose = require('mongoose'),
Auto = mongoose.model('Autos');

exports.ListarAutos = function(req, res) {
    Auto.find({}, function (err, auto){
        if(err)
            res.send(err);
        res.json(auto);
    });
};

exports.CrearAuto = function(req, res){
    var newAuto = new Auto(req.body);
    newAuto.save(function (err, auto){
        if(err)
            res.send(err);
        res.json(auto);
    });
};

exports.leerAuto = function (req, res) {
    Auto.findById(req.params.autoId, function (err, auto) {
      if (err)
        res.send(err);
      res.json(auto);
    });
  };
  
  exports.actualizarAuto = function (req, res) {
    Auto.findOneAndUpdate({ _id: req.params.autoId }, 
    req.body, { new: true }, function (err, auto) {
      if (err)
        res.send(err);
      res.json(auto);
    });
  };


  exports.borrarAuto = function (req, res) {
    Auto.deleteOne({ _id: req.params.ownderId }, function (err, auto) {
      if (err)
        res.send(err);
      res.json({ message: 'Auto borrado exitosamente' });
    });
  };