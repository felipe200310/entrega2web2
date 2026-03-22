const { Schema, model } = require('mongoose');

/**
 * Modelo para los Géneros de películas.
 * PascalCase para el modelo, camelCase para campos.
 */
const GeneroSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    descripcion: {
        type: String,
        trim: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Genero', GeneroSchema);
