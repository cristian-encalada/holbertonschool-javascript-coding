// Import the required modules
const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // For the root path ('/'), display "Hello Holberton School!"
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    try {
      const databaseFile = process.argv[2] || 'database.csv';
      const studentData = await countStudents(databaseFile);

      // Set the response content type and send the student data
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      // Handle errors by sending an error response
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end('Internal Server Error\n');
    }
  } else {
    // Handle other paths with a "Not Found" response
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245);

module.exports = app;
