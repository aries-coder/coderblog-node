const connections = require('../app/database')

class UserService {

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?`

    const [result] = await connections.execute(statement, [name])

    return result
  }

  async create(name, password) {
    const statement = `INSERT INTO user (name, password) VALUES (?, ?)`

    const [result] = await connections.execute(statement, [name, password])

    console.log(result);

    return result
  }
}

module.exports = new UserService()