const express = require('express');
const router = express.Router();

// Middleware function requestTime
const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}


router.use(requestTime)

router.get('/', (req, res) => {
  var responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText)
})

module.exports = router;
