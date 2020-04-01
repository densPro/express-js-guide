const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');
const handlersRouter =  require('./routes/handlers');
const requestTypesRouter =  require('./routes/request-types');
const importMiddlewareRouter = require('./routes/import-middleware.js');

// Routing 
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);
app.use('/handlers', handlersRouter);
app.use('/request-types', requestTypesRouter);
app.use('/import-middlewares', importMiddlewareRouter);


// Serving static files
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))