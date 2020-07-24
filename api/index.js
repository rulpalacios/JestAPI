const express = require('express')
const config = require('../config')
const user = require('./components/user/network')
const errors = require('../network/errors')

const app = express()
app.use(express.json())

app.use('/api/users', user)
app.use(errors)

app.listen(config.api.port, () => {
  console.log('Listen at', config.api.port)
})