const express=require('express')
const userRoute=express.Router()
const UserController=require('../controller/user.controller')
const AuthMiddleWare = require('../middlewares/auth.middleware')

userRoute.get('/register',UserController.postRegister)
userRoute.get('/login',AuthMiddleWare.requireLogin,UserController.getLogin)
userRoute.get('/updateCart', UserController.updateCart)
userRoute.get('/logout',UserController.getLogout)
module.exports=userRoute