// importando a biblioteca externas.
const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// criando uma instância de Router para gerenciar as rotas da aplicação.
const routes = express.Router();

// POST /devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// dando visibilidade externa do módulo routes.
module.exports = routes;