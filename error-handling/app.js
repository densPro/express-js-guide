
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

/*app.get('/', function (req, res) {
  throw new Error('BROKEN') // Express will catch this on its own.
})*/

/*app.get('/', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})*/

/*app.get('/', [
  function (req, res, next) {
    fs.writeFile('/inaccessible-path', 'data', next)
  },
  function (req, res) {
    res.send('OK')
  }
])*/

app.get('/', function (req, res) {
  throw new Error('BROKEN') // Express will catch this on its own.
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))