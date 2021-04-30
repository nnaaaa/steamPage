const User = require('../models/user');

class AuthMiddleWare{
    requireLogin(req, res, next) {
        if (!req.cookies.account) {
            next();
        }
        User.findOne({ account: req.cookies.account })
            .then(data => {
                if (data) {
                    res.send(data)
                    return
                }
            })
            .catch(err => {
                console.log('fail')
            })
        return
    }
}
module.exports = new AuthMiddleWare();

