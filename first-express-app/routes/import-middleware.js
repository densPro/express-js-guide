const express = require('express');
const middleware = require('./middlewares/middleware.js')
const router = express.Router();


router.use(middleware({ option1: '1', option2: '2' }));

router.get('/', (req, res) => res.send('Got import middleware'));

module.exports = router;