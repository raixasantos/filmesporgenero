const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.post('/fpg/genero/gen=:value', Controller.assinarGenero);
router.get('/fpg/filmes', Controller.listarFilmes);
router.get('/fpg/filmes/gen=:value', Controller.listarFilmesPorGenero);
router.post('/fpg/notificacao', Controller.notificarGenero);

module.exports = router;