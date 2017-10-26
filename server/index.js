// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const router = require('./router');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth'); // creates a new database [auth] inside of mongoDB

// App Setup
// use 即註冊 middleware
app.use(morgan('combined')); // logging framework[logging incoming request]
app.use(bodyParser.json({ type: '*/*' })); // parse any incoming request
router(app);

//

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:' + port);
