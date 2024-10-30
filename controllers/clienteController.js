const Cliente = require('../models/Cliente');

//FUNCION AGREGAR CLIENTES

exports.agregarClientes = async(req, res) =>{
    try{
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al agregar el cliente')
    }
}

//FUNCION BUSCAR CLIENTES

exports.buscarClientes = async(req, res) =>{
    try{
        let clientes = await Cliente.find();
        res.json(clientes);

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al buscar los clientes')
    }
}

//FUNCION BUSCAR Y MOSTRAR CLIENTES

exports.mostrarClientes = async(req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ msg: "Cliente no encontrado con ese ID" });
        } else {
            res.json(cliente);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar el cliente');
    }
}

//FUNCION PARA MODIFICAR CLIENTES CON PATH

exports.modificarClientes = async(req, res) =>{
    try{
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al modificar los clientes')
    }
}

//ACTUALIZAR CLIENTES

exports.actualizarClientes = async(req, res) =>{
    try{
        const clientes = await Cliente.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        if (!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }
    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al actualizar los clientes')
    }
}

exports.eliminarClientes = async(req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ msg: "Cliente no encontrado con ese ID" });
        }
        
        await Cliente.findByIdAndDelete(req.params.id);
        res.json({ msg: "Cliente eliminado correctamente" });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el cliente');
    }
}



