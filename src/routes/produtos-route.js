'use strict';

// importe necessários para se criar as rotas
const express = require('express');
const router = express.Router();
const controle = require('../produto-controle/produto-controle')

router.post('/',controle.post);
router.put('/:id',controle.put);
router.delete('/',controle.delete);





module.exports = router;