const mongoose = require('mongoose')
const GameList = mongoose.Schema({
    name: {
        type:String
    },
    avatar: {
        type:String
    },
    categories: {
        type:Array
    },
    sale: {
        type:String
    },
    price: {
        type:String
    },
    image: {
        type:Array
    }
})
module.exports = mongoose.model('GameList',GameList)