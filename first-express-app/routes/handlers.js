const express = require('express');
const router = express.Router();

// Handler routes
router.get('/', (req, res) => res.send('single callback for /handlers'));

// More than one callback function can handle a route (make sure you specify the next object)
router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
});

//An array of callback functions can handle a route.
const cb0 =  (req, res, next) => {
  console.log('CB0')
  next()
};

const cb1 = (req, res, next) => {
  console.log('CB1')
  next()
};

const cb2 = (req, res) => {
  res.send('Hello from C!')
};

router.get('/example/c', [cb0, cb1, cb2]);

// A combination of independent functions and arrays of functions can handle a route.
const cd0 = function (req, res, next) {
  console.log('CD0')
  next()
}

const cd1 = function (req, res, next) {
  console.log('CD1')
  next()
}

router.get('/example/d', [cd0, cd1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})


module.exports = router;
