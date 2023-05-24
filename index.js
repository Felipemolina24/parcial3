const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()
const app = express()
const cors = require('cors')
const routes = require('./routes/pedidos')
const coordenadaRoutes = require('./routes/coordenadas')
dbConnection()

app.use( cors())


app.use('/pedidos', routes)
app.use('/coordenadas', coordenadaRoutes)



app.use( express.json())
app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto', process.env.PORT);
})