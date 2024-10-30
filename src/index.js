const express = require('express'); //require = "REQUERIR" EL MODULO EXPRESS
const conectarBD = require('../config/db'); //CONECTA LA BASE, cuando se utiliza "require" no hace falta colocar al final del archivo el .js
const cors = require('cors');


//CREAMOS LA VARIABLE APP
const app = express();
const port = process.env.PORT || 5000;

//CONEXION BASES DE DATOS
conectarBD();
app.use(cors());
app.use(express.json());

// CONSUMIR API
app.use('/api/clientes', require('../routers/rutasCliente'));
app.use('/api/Productos', require('../routers/rutasProducto'));

// RUTA PARA VERIFICAR NUESTRO SERVIDOR EN LA WEB
app.get('/', (req, res) => {
    res.send("Hola, estamos conectados desde el web")
});


//RUTA DE NUESTRO SERVIDOR
app.listen(port, ()=>{
    console.log("El servidor esta conectado http://localhost:5000")
});





