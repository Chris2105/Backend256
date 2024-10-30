const Producto = require('../models/Producto');

//AGREGAR

exports.agregarProductos = async(req, res) =>{
    try{
        let Productos;
        productos = new Producto(req.body);
        await productos.save();
        res.json(productos);

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al agregar el producto')
    }
}

//BUSCAR

exports.buscarProductos = async(req, res) =>{
    try{
        let productos = await Producto.find();
        res.json(productos);

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al buscar los productos')
    }
}

//BUSCAR Y MOSTRAR - ID

exports.mostrarProductos = async(req, res) =>{
    try{
        let productos = await Producto.findById(req.params.id);
        if (!productos){
            return res.status(404).send({msg: "Producto no encontrado con ese ID"});
        }else{
            res.json(productos);
        }
    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al mostrar el producto')
    }
}

//MODIFICAR CON PATH

exports.modificarProductos = async(req, res) =>{
    try{
        const productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!productos){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
        }else{
            res.json(productos);
        }

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto')
    }
}

//ACTUALIZAR

exports.actualizarProductos = async(req, res) =>{
    try{
        const productos = await Producto.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        if (!productos){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
        }else{
            res.json(productos);
        }
    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto')
    }
}

//ELIMINAR
exports.eliminarProductos = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        
        if (!producto) {
            return res.status(404).send({ msg: "Producto no encontrado con ese ID" });
        }

        await Producto.findByIdAndDelete(req.params.id);
        res.json({ msg: "Producto eliminado correctamente" });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
};




