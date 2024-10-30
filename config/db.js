const mongoose = require('mongoose');
require('dotenv').config(); // SIRVE PARA CONECTAR LA BASE DE DATOS DE MONGO DB

//CONEXION CON MONGO
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados con mongoDB"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;

