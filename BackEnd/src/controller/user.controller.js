const User= require('../models/user')
class UserController{
    //[POST]  /user/register
    postRegister(req, res, next){
        const Users=new User(req.body)
        console.log(req.body)
    	Users.save()
        res.redirect('/user/login')
    }
    //[GET] /user/login
    getLogin(req, res, next) {
        console.log(req)
        User.find({ account: 'kimy' })
        .then(data=>res.send(data))
    }
}
module.exports=new UserController()