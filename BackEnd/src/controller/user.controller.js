const User = require('../models/user')

class UserController {
    //[POST]  /user/register
    postRegister(req, res, next) {
        const { password, confirmPassword, email, account } = req.query
        const error = {};
        const isError = false;
        User.find({})
            .then(data => {
                if (data.some((user) => user.account === account)) {
                    error.account = 'This account is already in use'
                    isError = true
                }
                if (data.some((user) => user.email === email)) {
                    error.email = 'Email is already in use'
                    isError = true
                    
                }
                if (password !== confirmPassword) {
                    error.confirmPassword = 'Password do not match'
                    isError = true
                    delete req.query.confirmPassword
                }
                if (isError) {
                    res.send({ error })
                    return
                }
                const Users = new User(req.query)
                Users.save()
                res.cookie('account', req.query.account)
                res.send(req.query)
            })
            .catch(err=>console.log(err))    
    }
    //[GET] /user/login
    getLogin(req, res, next) {
        const error = {
            account: '',
            password: ''
        }
        User.findOne({
                account: req.query.account
            })
            .then(data => {
                if (!data) {
                    error.account = 'Account doesn\'t exist';
                    res.send({ error })
                    return
                }
                if (data.password !== req.query.password) {
                    error.password = 'Wrong password';
                    res.send({ error })
                    return
                }
                res.cookie('account', data.account)
                res.send(data)
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    //[PUT] /user/updateCart
    updateCart(req, res, next) {
        console.log(req.query.cart)
        User.updateOne({ account: req.query.account }, req.query)
            .then(()=>res.redirect('back'))
    }
    //[GET] /user/logout
    getLogout(req, res, next) {
        res.clearCookie('account')
        console.log(req.cookies)
        res.redirect('back')
    }
}
module.exports = new UserController()