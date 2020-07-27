const app = require('./index')
const config = require('../config')

const server = app.listen(config.api.port, () => {
  console.log('Listen at', config.api.port)
})

module.exports = server