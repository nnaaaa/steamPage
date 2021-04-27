const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://cusa789:123tumodi@cluster0.z53no.mongodb.net/Steam?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("ket noi db thanh cong")
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    connect
}