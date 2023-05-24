const express = require('express')
const router = express.Router()
const {crearCoordenada, getCoordenadas} = require('../controllers/coordenadas')


router.get('/', getCoordenadas)
router.post('/', crearCoordenada)

module.exports = router;