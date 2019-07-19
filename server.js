const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/geren-corridas-api', { useNewUrlParser:true});
requireDir('./src/models');
const Driver = mongoose.model('Driver');
const Address = mongoose.model('Address');
app.use('/api', require('./src/routers/routers'));
app.listen(3001);