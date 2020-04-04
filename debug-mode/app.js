
const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  console.log('Get Users');
  const users = ['user 1', 'user 2', 'user 3'];
  res.send(users);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))