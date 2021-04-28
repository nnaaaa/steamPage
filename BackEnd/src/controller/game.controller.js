const GameList=require('../models/gameInfo')
class GameController{
    //[GET] /game
    getGame(req, res, next) {
        GameList.find({})
            .then(data=>res.send(data))
    }
    //[GET] /game/addGame
    getAddGame(req, res, next) {
        res.render('./views/addGame.pug')
    }

    //[POST] /game/addGame
    postAddGame(req, res, next) {
        const GameLists = new GameList(req.body);
        console.log(GameLists)
        GameLists.save()
        res.redirect('/game/addGame')
    }
}

module.exports = new GameController()