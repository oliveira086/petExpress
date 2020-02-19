const petController = require('../controller/petController')
const express = require('express')
const app = express()

const Router = express.Router()

Router.get('/', petController.index)
Router.get('/add/:nome', petController.add)
Router.get('/buscar', petController.buscar)
Router.get('/show', petController.show)

module.exports = Router