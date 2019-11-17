const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})

    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    }
    else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    }
    else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }

  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    console.log('newUser>>> in db', newUser)
    req.login(newUser, err => (err ? next(err) : res.json(newUser)))
  } catch (err) {
    console.error(err)
    next(err)
  }
})
