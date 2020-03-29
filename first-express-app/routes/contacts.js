const express = require('express');
const router = express.Router();

// Middleware doesn't works for child paths
router.all('/', function (req, res, next) {
  console.log('contacts middleware')
  next() // pass control to the next handler
});

// Contact routes 
router.get('/', (req, res) => res.send('Got a GET request at /contacts'))
router.get('/accounts', (req, res) => res.send('Got a GET request at /contacts/accounts'))

module.exports = router;
