const tipoService = require('../services/tipoService');

/**
 * Controlador de Tipos de Multimedia.
 */
const crearTipo = async (req, res) => {
    try {
        const tipo = await tipoService.crearTipo(req.body);
        res.status(201).json(tipo);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

const obtenerTipos = async (req, res) => {
    try {
        const tipos = await tipoService.obtenerTipos();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarTipo = async (req, res) => {
    try {
        const tipo = await tipoService.actualizarTipo(req.params.id, req.body);
        if (!tipo) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
        res.json(tipo);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    crearTipo,
    obtenerTipos,
    actualizarTipo
};
