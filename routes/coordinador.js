const express = require('express');
const router = express.Router();
const controller = require('../controllers/coordinador');

router.get('/', controller.donaciones);
router.get('/perfil', controller.perfil);  
router.get('/cortes', controller.cortes);

module.exports = router;