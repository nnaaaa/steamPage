const express=require('express')
const userRoute=express.Router()
const UserController=require('../controller/user.controller')

userRoute.post('/register',UserController.postRegister)

module.exports=userRoute