const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('db connected'))
.catch(error => console.log(error))

// import routes
const indexRoutes = require('./routes');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRoutes);

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});