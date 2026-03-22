const mediaService = require('../services/mediaService');

/**
 * Controlador de Media (Películas y Series).
 */
const crearMedia = async (req, res) => {
    try {
        const media = await mediaService.crearMedia(req.body);
        res.status(201).json(media);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

const obtenerMedias = async (req, res) => {
    try {
        const medias = await mediaService.obtenerMedias();
        res.json(medias);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarMedia = async (req, res) => {
    try {
        const media = await mediaService.actualizarMedia(req.params.id, req.body);
        if (!media) return res.status(404).json({ mensaje: 'Media no encontrada' });
        res.json(media);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    crearMedia,
    obtenerMedias,
    actualizarMedia
};
