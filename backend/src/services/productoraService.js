const Productora = require('../models/Productora');

/**
 * Servicio para la gestión de Productoras.
 */
const crearProductora = async (datos) => {
    const productora = new Productora(datos);
    return await productora.save();
};

const obtenerProductoras = async () => {
    return await Productora.find();
};

const actualizarProductora = async (id, datos) => {
    datos.fechaActualizacion = new Date();
    return await Productora.findByIdAndUpdate(id, datos, { new: true });
};

const obtenerProductoraPorId = async (id) => {
    return await Productora.findById(id);
};

module.exports = {
    crearProductora,
    obtenerProductoras,
    actualizarProductora,
    obtenerProductoraPorId
};
