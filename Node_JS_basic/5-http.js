const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // For the root path ('/'), display "Hello Holberton School!"
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    try {
      const databaseFile = process.argv[2] || 'database.csv'; // // Get the database file path

      let consoleOutput = ''; // variable to capture console.log output
      const originalConsoleLog = console.log;
      console.log = (message) => {
        consoleOutput += `${message}\n`; //  // Capture console.log output
      };

      await countStudents(databaseFile); // Retrieve student data with countStudents() function

      consoleOutput = consoleOutput.trim(); // // Remove extra newline from the end

      console.log = originalConsoleLog; // // Restore the original console.log function

      res.end(`This is the list of our students\n${consoleOutput}`);
    } catch (error) {
      // Handle errors by sending an error response
      res.statusCode = 400;
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    // Handle other paths with a "Not Found" response
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245); // Listen on port 1245

module.exports = app;
