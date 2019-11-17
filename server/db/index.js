const db = require('./db')
const User = require('./models/user')

require('./models/user.js')

module.exports = { db, User}
