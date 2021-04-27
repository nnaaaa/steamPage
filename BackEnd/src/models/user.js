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
    }
},{
    versionKey: false 
});
module.exports = mongoose.model('Users', User)