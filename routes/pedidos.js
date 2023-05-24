const express = require('express')
const router = express.Router()
const {crearOrden, getOrden} = require('../controllers/pedidos') 

router.get('/', getOrden)
router.post('/', crearOrden)

module.exports = router;