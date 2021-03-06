'use strict'
const { User, db } = require('../server/db')

async function seed() {

  try {
    await db.sync({force: true})
   console.log('db synced!')

   const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      email: 'cody@email.com',
      password: '123',
      plasticCount: '0',
      reusableCount: '0'
    }),
    User.create({
      firstName: 'Marley',
      email: 'marley@email.com',
      password: '123',
      plasticCount: '0',
      reusableCount: '0'
    }),
    User.create({
      firstName: 'Gia',
      email: 'gia@email.com',
      password: '123',
      plasticCount: '0',
      reusableCount: '0'
    }),
    User.create({
      firstName: 'Brian',
      email: 'brian@email.com',
      password: '123',
      plasticCount: '0',
      reusableCount: '0'
    })
  ])

  console.log(`seeded ${users.length} users`)
}
  catch (error) {
    console.log(error)
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
if (module === require.main) {
  runSeed()
}

module.exports = seed
