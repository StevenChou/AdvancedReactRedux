// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup
// use 即註冊 middleware
app.use(morgan('combined'));  // logging framework[logging incoming request]
app.use(bodyParser.json({ type: '*.*' })); // parse any incoming request

//

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:' + port);
