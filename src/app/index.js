const Koa = require('koa')
const initiaRoutes = require('../router')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')

const app = new Koa()

app.use(bodyParser())
initiaRoutes(app)

app.on('error', errorHandler)

module.exports = app