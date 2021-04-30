const express=require('express')
const app= express()
const port=4000;
const cors=require('cors')
const cookie=require('cookie-parser')
const userRoute = require('./route/userRoute')
const gameRoute = require('./route/gameRoute')
const db= require('./config/db/mongoose')
db.connect()

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