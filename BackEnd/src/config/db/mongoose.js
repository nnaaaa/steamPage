const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL ,{
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