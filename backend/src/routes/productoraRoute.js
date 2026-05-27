const { Router } = require('express');
const productoraController = require('../controllers/productoraController');
const { verificarToken, permitirRoles } = require('../middlewares/authMiddleware');
const router = Router();

router.post('/', productoraController.crearProductora);
router.get('/', productoraController.obtenerProductoras);
router.put('/:id', productoraController.actualizarProductora);

module.exports = router;
