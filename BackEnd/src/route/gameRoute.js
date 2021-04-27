const express = require('express')
const gameRoute = express.Router()
const GameController = require('../controller/game.controller')

gameRoute.get('/', GameController.getGame)
gameRoute.get('/addGame', GameController.getAddGame)
gameRoute.post('/addGame',GameController.postAddGame)

module.exports = gameRoute