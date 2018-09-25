'use strict';
// importação de objetos e dependencias
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();

//carregando as rodas do modulo/routes/index
const indexRoute = require('./routes/index-route');
const produtosRoute = require('./routes/produtos-route');

/* definindo uso da aplicação do Body-parser para todo requeste que vier
   passa pelo body parser e converte para formato JSON
*/
app.use(bodyParser.json()); // convertendo todo conteudo para Json
// para decodificar as URL para corrigir espaços em brancos
app.use(bodyParser.urlencoded({ extended: false})); 


app.use('/', indexRoute);
app.use('/produtos', produtosRoute);

//exportando a aplicação tornando a visível
module.exports = app