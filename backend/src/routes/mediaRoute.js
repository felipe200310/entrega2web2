const { Router } = require('express');
const mediaController = require('../controllers/mediaController');
const { verificarToken, permitirRoles } = require('../middlewares/authMiddleware');

const router = Router();

router.post('/', verificarToken, permitirRoles('admin'), mediaController.crearMedia);
router.get('/', verificarToken, permitirRoles('admin', 'usuario'), mediaController.obtenerMedias);
router.put('/:id', verificarToken, permitirRoles('admin'), mediaController.actualizarMedia);

module.exports = router;