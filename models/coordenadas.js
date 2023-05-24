const { Schema, model } = require('mongoose')

const coordenadasSchema = Schema({
    x: {
        type: Number,
        require: true,
    },
    y: {
        type: Number,
        require: true
    }

})

module.exports = model('coordenadas', coordenadasSchema)
