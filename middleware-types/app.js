const express = require('express');
const app = express();
const port = 3000;

const userRoute = require('./routes/user.js');
const brokenRoute = require('./routes/broken-route.js');

// Routing 

// ########### Application-level middleware #############

//no mount path. The function is executed every time the app receives a request. 
app.use((req, res, next) => {
  console.log('no mouth path');
  next();
});

//with path. The function is executed for any type of HTTP request on the /employee/:id path.
app.use('/employee/:id', (req, res, next) => {
  console.log('with path. Request Type:', req.method)
  next()
})

// the function handles GET requests to the /employee/:id path.
app.get('/employee/:id', (req, res, next) => {
  res.send('employee')
})

// Router-level middleware

app.use('/user', userRoute);
app.use('/broken-router', brokenRoute);

// Built-in middleware
// express.static serves static assets such as HTML files, images, and so on.
app.use(express.static('public'));
// express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
// app.use(express.json)
// express.urlencoded parse
// app.use(express.urlencoded)

// Not found
app.get('*', function(req, res){
  res.send('Not Found', 404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
