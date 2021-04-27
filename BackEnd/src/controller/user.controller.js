const User= require('../models/user')
class UserController{
    //[POST]  /user/register
    postRegister(req, res, next){
        const Users=new User(req.body)
        console.log(req.body)
    	Users.save()
        res.redirect('/user/login')
    }
}
module.exports=new UserController()