const path = require('path')
const express = require('express')
const morgan = require('morgan')
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 3000
// const cors = cors = require('cors');
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./api'))

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app;
