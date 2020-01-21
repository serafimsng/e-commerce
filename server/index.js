require('./config/mongoose')
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes'))

app.listen(port, ()=>{
    console.log('listening in port '+ port)
})

module.exports = app