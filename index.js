const express = require('express')
const petRotas = require('./routes/pet')

const app = express()

app.listen(3030, () => {
    console.log('To online')
})

app.use(petRotas)