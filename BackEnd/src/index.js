const express=require('express')
const cors=require('cors')
const cookie = require('cookie-parser')
const dotenv= require('dotenv')
const userRoute = require('./route/userRoute')
const gameRoute = require('./route/gameRoute')
const db = require('./config/db/mongoose')
dotenv.config()
db.connect()
const app = express()
const port=process.env.PORT;

app.use(express.urlencoded({ extended: true }))
app.use(cookie())
app.use(cors())

app.set('view engine', 'pug')
app.set('views','./src')

app.use('/user',userRoute);
// app.get('/user/register',(res,req)=>{
//     req.render('./views/register.pug')
// })

app.use('/game',gameRoute)

app.listen(port,()=>{
    console.log(`BackEnd at port ${port}`)
})