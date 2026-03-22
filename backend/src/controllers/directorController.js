const directorService = require('../services/directorService');

/**
 * Controlador de Directores.
 */
const crearDirector = async (req, res) => {
    try {
        const director = await directorService.crearDirector(req.body);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

const obtenerDirectores = async (req, res) => {
    try {
        const directores = await directorService.obtenerDirectores();
        res.json(directores);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarDirector = async (req, res) => {
    try {
        const director = await directorService.actualizarDirector(req.params.id, req.body);
        if (!director) return res.status(404).json({ mensaje: 'Director no encontrado' });
        res.json(director);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    crearDirector,
    obtenerDirectores,
    actualizarDirector
};
