let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let http = require('http');

let index = require('./routes/index');
let users = require('./routes/users');

let app = express();

let port = process.env.PORT || '4000';
app.set('port', port);

let server = http.createServer(app);


server.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);

server.on('listening', () => console.log('server start'));

