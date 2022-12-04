const mysql = require('mysql2')

const {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  APP_HOST
} = require('./config')

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,
  user: MYSQL_USER
})

connections.getConnection((err, con) => {
  err && console.log('连接失败', err);
  console.log('连接数据库成功');
})

module.exports = connections.promise()