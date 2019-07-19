const express = require('express');
const routes = express.Router();

const DriverController = require('../controllers/DriverController');
routes.get('/drivers', DriverController.listAll);
routes.get('/drivers/:id', DriverController.show);
routes.post('/drivers',DriverController.save);
routes.put('/drivers/:id', DriverController.update);
routes.delete('/drivers/:id', DriverController.delete);

module.exports = routes;