// Import the HTTP Module
const http = require('http');

// Create an HTTP server
const server = http.createServer((_, response) => {
  // Send a text as the response body to the client
  response.write('Hello Holberton School!');
  // End of the response. No more data can be written
  response.end();
  // The server is listening on port 1245 for incoming HTTP requests
}).listen(1245);
// Export the 'server' object
module.exports = server;
