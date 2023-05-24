const Orden  = require('../models/pedidos')

const crearOrden = async(req,res) => {
    try {
        const {ordenId, date} = req.params
        const nuevaOrden = new Orden({ordenId, date})
        const guardarOrden = await nuevaOrden.save()
        res.status(201).json(guardarOrden)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getOrden = async (req, res) => {
  try {
    const ordenes = await Orden.find();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearOrden, getOrden };