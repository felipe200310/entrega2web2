const { Schema, model } = require('mongoose');

const MediaSchema = new Schema({
    serial: {
        type: String,
        required: [true, 'El serial es obligatorio'],
        unique: true,
        trim: true
    },
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true
    },
    sinopsis: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        unique: true,
        required: [true, 'La URL de la película es obligatoria']
    },
    imagenPortada: {
        type: String,
        required: [true, 'La imagen de portada es obligatoria']
    },
    estreno: {
        type: Number,
        required: true
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
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

module.exports = model('Media', MediaSchema);
