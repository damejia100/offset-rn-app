const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db/db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 3000
const app = express()
const socketio = require('socket.io')
module.exports = app

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  app.use(morgan('dev'))

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use(compression())

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/api', require('./api'))

  app.use(express.static(path.join(__dirname, '..', 'public')))

  // app.use((req, res, next) => {
  //   if (path.extname(req.path).length) {
  //     const err = new Error('Not found')
  //     err.status = 404
  //     next(err)
  //   } else {
  //     next()
  //   }
  // })

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}


// const path = require('path')
// const express = require('express')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')
// const db = require('./db')
// const passport = require('passport')
// const session = require('express-session')
// const PORT = process.env.PORT || 3000
// // const cookieParser = require('cookie-parser');
// // const cors = cors = require('cors');
// const app = express()

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api', require('./api'))
// // app.use(cookieParser());
// // app.use(cors());passport.serializeUser((user, done) => done(null, user.id))

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await db.models.user.findByPk(id)
//     done(null, user)
//   } catch (err) {
//     done(err)
//   }
// })

// app.use(passport.initialize())
// app.use(passport.session())

// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found')
//     err.status = 404
//     next(err)
//   } else {
//     next()
//   }
// })

// app.use((err, req, res, next) => {
//   console.error(err)
//   console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error.')
// })

// module.exports = app;
