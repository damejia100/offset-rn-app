'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = 3000

db.sync() // if you updating db schemas, make sure to drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })
