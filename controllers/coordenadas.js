const Coordenada = require('../models/coordenadas')

const crearCoordenada = async(req, res) => {
    try {
        const { x, y } = req.params;

        const nuevaCoordenada = new Coordenada({x,y})

        const guardarCoordenada = await nuevaCoordenada.save()
        
        res.status(201).json(guardarCoordenada)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const getCoordenadas = async (req, res) => {
    try {
        const coordenadas = await Coordenada.find()
        res.status(200).json(coordenadas)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
  
  
  

  module.exports = { crearCoordenada, getCoordenadas};