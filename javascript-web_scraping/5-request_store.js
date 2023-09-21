#!/usr/bin/node
// Script that gets the contents of a webpage and stores it in a file.
// The first argument is the URL to request
// The second argument the file path to store the body response
// The file must be UTF-8 encoded
const request = require('request');
const fs = require('fs');


// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error(writeError);
    }
  });
});
