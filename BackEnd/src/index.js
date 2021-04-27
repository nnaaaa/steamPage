const express=require('express')
const app= express()
const port=4000;
const cors=require('cors')

const db= require('./config/db/mongoose')
db.connect()

app.use(express.urlencoded({ extended: true }))
const userRoute = require('./route/userRoute')
const gameRoute = require('./route/gameRoute')

app.set('view engine', 'pug')
app.set('views','./src')

app.use(cors())

app.use('/user',userRoute);
// app.get('/user/register',(res,req)=>{
//     req.render('./views/register.pug')
// })

app.use('/game',gameRoute)

app.listen(port,()=>{
    console.log(`BackEnd at port ${port}`)
})