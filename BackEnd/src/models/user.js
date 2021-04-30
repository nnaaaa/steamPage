const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = new Schema({
    account: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        min: 8,
        max: 16
    },
    date: {
        type: Date,
    },
    country: {
        type: String
    },
    coin: {
        type: Number,
        default:0
    },
    cart: {
        type: Array,
        default:[]
    }
},{
    versionKey: false 
});
module.exports = mongoose.model('Users', User)