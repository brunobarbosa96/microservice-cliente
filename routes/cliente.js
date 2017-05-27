module.exports = (app) => {
   
    let controller = require('../cliente/clienteController')(app);
    app.get('/microservice/cliente/', controller.getAll);
    app.get('/microservice/cliente/:id', controller.get);
};