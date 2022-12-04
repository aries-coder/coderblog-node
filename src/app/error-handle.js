const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  USER_IF_NOT_EXISTS
} = require('../constants/error-type')
const errorHandler = (error, ctx) => {
  let message, status

  switch (error.message) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      message = '用户名或密码不能为空'
      status = 404
      break;
    case USER_ALREADY_EXISTS:
      message = '该用户已注册'
      status = 404
      break;
    case USER_IF_NOT_EXISTS:
      message = '该用户不存在'
      status = 404
      break;
    default:
      message = '服务器错误'
      status = '404'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler