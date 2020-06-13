const express = require('express');
const server = express();
const routes = require('./routes');

server.use(routes);

server.listen(3000, function() {
	console.log('server is running');
});