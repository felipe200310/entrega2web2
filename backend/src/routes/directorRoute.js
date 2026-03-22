const { Router } = require('express');
const directorController = require('../controllers/directorController');

const router = Router();

router.post('/', directorController.crearDirector);
router.get('/', directorController.obtenerDirectores);
router.put('/:id', directorController.actualizarDirector);

module.exports = router;
