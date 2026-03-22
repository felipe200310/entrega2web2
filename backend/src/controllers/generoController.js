const generoService = require('../services/generoService');

/**
 * Controlador de Géneros.
 * Gestiona req y res, delegando la lógica al servicio.
 */
const crearGenero = async (req, res) => {
    try {
        const genero = await generoService.crearGenero(req.body);
        res.status(201).json(genero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

const obtenerGeneros = async (req, res) => {
    try {
        const generos = await generoService.obtenerGeneros();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarGenero = async (req, res) => {
    try {
        const genero = await generoService.actualizarGenero(req.params.id, req.body);
        if (!genero) return res.status(404).json({ mensaje: 'Género no encontrado' });
        res.json(genero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    crearGenero,
    obtenerGeneros,
    actualizarGenero
};
