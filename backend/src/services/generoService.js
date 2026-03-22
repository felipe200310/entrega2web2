const Genero = require('../models/Genero');

/**
 * Servicio para la gestión de Géneros.
 * Implementa la lógica de negocio y persistencia.
 */
const crearGenero = async (datos) => {
    const genero = new Genero(datos);
    return await genero.save();
};

const obtenerGeneros = async () => {
    return await Genero.find();
};

const actualizarGenero = async (id, datos) => {
    datos.fechaActualizacion = new Date();
    return await Genero.findByIdAndUpdate(id, datos, { new: true });
};

const obtenerGeneroPorId = async (id) => {
    return await Genero.findById(id);
};

module.exports = {
    crearGenero,
    obtenerGeneros,
    actualizarGenero,
    obtenerGeneroPorId
};
