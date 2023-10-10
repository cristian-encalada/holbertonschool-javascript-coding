// Import the HTTP Module
const http = require('http');

// Create an HTTP server
const server = http.createServer((request, response) => {
  // Send the status code 200 (success)
  response.statusCode = 200;
  // Send a text as the response body to the client
  response.write('Hello Holberton School!');
  // End of the response. No more data can be written
  response.end();
});

// Listen on port 1245 for incoming HTTP requests
server.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
