#!/usr/bin/node
// Script that display the status code of a GET request
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Send a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Print the status code
  console.log(`code: ${response.statusCode}`);
});
