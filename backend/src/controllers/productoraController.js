const productoraService = require('../services/productoraService');

/**
 * Controlador de Productoras.
 */
const crearProductora = async (req, res) => {
    try {
        const productora = await productoraService.crearProductora(req.body);
        res.status(201).json(productora);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

const obtenerProductoras = async (req, res) => {
    try {
        const productoras = await productoraService.obtenerProductoras();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarProductora = async (req, res) => {
    try {
        const productora = await productoraService.actualizarProductora(req.params.id, req.body);
        if (!productora) return res.status(404).json({ mensaje: 'Productora no encontrada' });
        res.json(productora);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    crearProductora,
    obtenerProductoras,
    actualizarProductora
};
