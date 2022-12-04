const userService = require('../service/user.service')
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS
} = require('../constants/error-type')
const md5Password = require('../utils/handle-password')

const verifyUser = async (ctx, next) => {

  // 获取注册的用户名和密码
  const { name, password } = ctx.request.body

  // 判断用户名或密码是否为空 
  if (!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断该用户名是否已经注册
  const result = await userService.getUserByName(name)
  console.log(result);
  if (result.length) {
    const error = new Error(USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx, next) => {
  
  const { password } = ctx.request.body
  ctx.request.body.password = md5Password(password)
  
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}