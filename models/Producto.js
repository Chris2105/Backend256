const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    disponible: {
        type: Boolean,
        default: true
    },
},{versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);






