const { Router } = require('express');
const productoraController = require('../controllers/productoraController');

const router = Router();

router.post('/', productoraController.crearProductora);
router.get('/', productoraController.obtenerProductoras);
router.put('/:id', productoraController.actualizarProductora);

module.exports = router;
