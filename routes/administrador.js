const express = require('express');
const router = express.Router();
const controller = require('../controllers/administrador');

router.get('/', controller.donaciones);
router.get('/perfil', controller.perfil);
router.get('/cortes', controller.cortes);
router.get('/usuarios', controller.usuarios);

module.exports = router