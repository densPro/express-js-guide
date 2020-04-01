
const express = require('express')
const app = express()
const port = 3000

// Using Pug template engine
// Don't forget install pug 
app.set('view engine', 'pug')
const options = { title: 'hey', message: 'Hello there!'}
app.get('/', (req, res) => res.render('index', options))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
