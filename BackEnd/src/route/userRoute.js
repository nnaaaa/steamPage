const express=require('express')
const userRoute=express.Router()
const UserController=require('../controller/user.controller')

userRoute.post('/register',UserController.postRegister)
userRoute.get('/login',UserController.getLogin)
module.exports=userRoute