const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');

/**
 * Servicio para la gestión de Media (Películas y Series).
 * Incluye validación de estados activos antes de guardar.
 */
const crearMedia = async (datos) => {
    // 1. Validar que el Género esté activo
    const genero = await Genero.findById(datos.genero);
    if (!genero || genero.estado !== 'Activo') {
        throw new Error('El Género seleccionado no existe o está Inactivo');
    }

    // 2. Validar que el Director esté activo
    const director = await Director.findById(datos.director);
    if (!director || director.estado !== 'Activo') {
        throw new Error('El Director seleccionado no existe o está Inactivo');
    }

    // 3. Validar que la Productora esté activa
    const productora = await Productora.findById(datos.productora);
    if (!productora || productora.estado !== 'Activo') {
        throw new Error('La Productora seleccionada no existe o está Inactiva');
    }

    // 4. Validar que el Tipo exista
    const tipo = await Tipo.findById(datos.tipo);
    if (!tipo) {
        throw new Error('El Tipo de multimedia seleccionado no existe');
    }

    const media = new Media(datos);
    return await media.save();
};

const obtenerMedias = async () => {
    // Usamos populate para traer la información completa de las relaciones
    return await Media.find()
        .populate('genero')
        .populate('director')
        .populate('productora')
        .populate('tipo');
};

const actualizarMedia = async (id, datos) => {
    datos.fechaActualizacion = new Date();
    return await Media.findByIdAndUpdate(id, datos, { new: true });
};

const obtenerMediaPorId = async (id) => {
    return await Media.findById(id)
        .populate('genero')
        .populate('director')
        .populate('productora')
        .populate('tipo');
};

module.exports = {
    crearMedia,
    obtenerMedias,
    actualizarMedia,
    obtenerMediaPorId
};
