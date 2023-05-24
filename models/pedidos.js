const { Schema, model } = require('mongoose')

const pedidosSchema = Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    fecha: {
        type: Date,
        require: true
    }
})

module.exports = model('pedidos', pedidosSchema)
