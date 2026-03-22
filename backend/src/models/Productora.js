const { Schema, model } = require('mongoose');

const ProductoraSchema = new Schema({
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
    slogan: {
        type: String,
        trim: true
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

module.exports = model('Productora', ProductoraSchema);
