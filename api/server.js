const app = require('./index')
const config = require('../config')

const server = app.listen(config.api.port, () => {
  console.log('Listen at http://localhost:' + config.api.port + '/api/users')
})

module.exports = server