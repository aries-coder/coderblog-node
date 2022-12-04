const fs = require('fs')

const initiaRoutes = (app) => {
  fs.readdir('./src/router', (err, files) => {
    files.forEach((file) => {
      if (file !== 'index.js') {
        const router = require(`./${file}`)
        app.use(router.routes())
      }
      
    })
  })
}

module.exports = initiaRoutes