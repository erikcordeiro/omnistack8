// importando a biblioteca externas.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// criando o servidor.
const server = express();

// configurando conexão com a base de dados.
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cdgki.azure.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true });

// configurando o servidor.
server.use(cors());
server.use(express.json()); // importando o supoert a json do express.
server.use(routes);         // importando as configurações de rotas do routes para o server.

server.listen(3333);        // definindo a porta de escuta do servidor.