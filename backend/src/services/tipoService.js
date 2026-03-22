const Tipo = require('../models/Tipo');

/**
 * Servicio para la gestión de Tipos de Multimedia.
 */
const crearTipo = async (datos) => {
    const tipo = new Tipo(datos);
    return await tipo.save();
};

const obtenerTipos = async () => {
    return await Tipo.find();
};

const actualizarTipo = async (id, datos) => {
    datos.fechaActualizacion = new Date();
    return await Tipo.findByIdAndUpdate(id, datos, { new: true });
};

const obtenerTipoPorId = async (id) => {
    return await Tipo.findById(id);
};

module.exports = {
    crearTipo,
    obtenerTipos,
    actualizarTipo,
    obtenerTipoPorId
};
