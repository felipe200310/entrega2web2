const { Router } = require('express');
const mediaController = require('../controllers/mediaController');

const router = Router();

router.post('/', mediaController.crearMedia);
router.get('/', mediaController.obtenerMedias);
router.put('/:id', mediaController.actualizarMedia);

module.exports = router;
