const express = require('express')
const user = require('./components/user/network')
const errors = require('../network/errors')

const app = express()
app.use(express.json())

app.use('/api/users', user)
app.use(errors)



module.exports = app