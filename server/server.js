const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(request, response) {

	const urlPath = url.parse(request.url).pathname;
	const filePath = `./client/${urlPath}`;

	fs.exists(filePath, function(doesExist) {
		if(!doesExist) {
			response.statusCode = 404;
			response.end(`Resource not found: "${urlPath}"`);
		}
	})

	fs.readFile(filePath, (err, data) => {
		if (err) {
			response.statusCode = 500;
			response.end(`Server error: "${err}"`);
		} else {
			response.end(data.toString('utf-8'));
		}
	});
});

server.listen(3000, function() {
	console.log('Server listening...');
});