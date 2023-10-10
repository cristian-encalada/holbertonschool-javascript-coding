// Import the HTTP Module
const http = require('http');

// Create an HTTP server
http.createServer((request, response) => {
  // Send the status code 200 (success)
  response.statusCode = 200;
  // Send a text as the response body to the client
  response.write('Hello Holberton School!');
  // End of the response. No more data can be written
  response.end();
  // The server is listening on port 1245 for incoming HTTP requests
}).listen(1245);
