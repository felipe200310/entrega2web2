const { Router } = require('express');
const tipoController = require('../controllers/tipoController');

const router = Router();

router.post('/', tipoController.crearTipo);
router.get('/', tipoController.obtenerTipos);
router.put('/:id', tipoController.actualizarTipo);

module.exports = router;
