const Director = require('../models/Director');

/**
 * Servicio para la gestión de Directores.
 */
const crearDirector = async (datos) => {
    const director = new Director(datos);
    return await director.save();
};

const obtenerDirectores = async () => {
    return await Director.find();
};

const actualizarDirector = async (id, datos) => {
    datos.fechaActualizacion = new Date();
    return await Director.findByIdAndUpdate(id, datos, { new: true });
};

const obtenerDirectorPorId = async (id) => {
    return await Director.findById(id);
};

module.exports = {
    crearDirector,
    obtenerDirectores,
    actualizarDirector,
    obtenerDirectorPorId
};
