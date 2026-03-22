const { Router } = require('express');
const generoController = require('../controllers/generoController');

const router = Router();

/**
 * Rutas para el módulo de Género.
 * Endpoint base: /api/genero
 */
router.post('/', generoController.crearGenero);
router.get('/', generoController.obtenerGeneros);
router.put('/:id', generoController.actualizarGenero);

module.exports = router;
