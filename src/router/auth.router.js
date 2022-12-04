const Router = require('koa-router')

const { verifyLogin } = require('../middleware/auth.middleware')
const {
  logn
} = require('../controller/auth.controller')

const authRouter = new Router({prefix: '/login'})

authRouter.post('/', verifyLogin, logn)

module.exports = authRouter