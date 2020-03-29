const express = require('express');
const router = express.Router();

// Middleware works for child paths
router.use('/', function (req, res, next) {
  console.log('users middleware')
  next()
});

// User routes
router.get('/', (req, res) => res.send('Got a GET request at /users'));
router.delete('/', (req, res) => res.send('Got a DELETE request at /users'));
router.get('/accounts', (req, res) => res.send('Got a GET request at /users/accounts'));

// Route paths with regular expression. It can be strings, string patterns, or regular expressions.
router.get('/ab?cd', (req, res) => res.send('ab?cd route path will match acd and abcd.'));

// Route parameters. route parameters must be made up of “word characters” ([A-Za-z0-9_]).
router.get('/:userId', (req, res) => res.send(req.params));
/// you can append a regular expression in parentheses (()):
router.get('/:book(\\d+)', (req, res) => res.send(req.params));

// Route handlers

module.exports = router;
