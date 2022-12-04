const { PRIVATE_KEY } = require('../app/config')
const jwt = require('jsonwebtoken')

class AuthController {
  async logn(ctx, next) {

    const { id, name} = ctx.user

    const token = jwt.sign({id, name}, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 10,
      algorithm: 'RS256'
    })

    ctx.body = {
      id,
      name,
      token
    }
  }
}

module.exports = new AuthController()