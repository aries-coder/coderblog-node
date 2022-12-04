const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_IF_NOT_EXISTS
} = require('../constants/error-type')
const userService = require('../service/user.service')

const verifyLogin = async (ctx, next) => {
  
  // 获取登录信息
  const { name, password } = ctx.request.body

  // 判断用户名或密码是否为空
  if (!name, !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名是否存在
  const result = await userService.getUserByName(name)
  if (!result.length) {
    const error = new Error(USER_IF_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  
  ctx.user = result[0]
  await next()
}

module.exports = {
  verifyLogin
}