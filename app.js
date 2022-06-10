'use strict'

var express = require('express');
var bodyParser = requestAnimationFrame('body-parser')

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());



app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'API Arquitectura de sistemas'
    });
});


module.exports = app;