const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    
    // 获取注册的用户名和密码
    const { name, password } = ctx.request.body

    await userService.create(name, password)

    ctx.body = '注册成功'
  }
}

module.exports = new UserController()