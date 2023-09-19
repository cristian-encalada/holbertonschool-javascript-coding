#!/usr/bin/node
// Script that reads and prints the content of a file
const fs = require('fs');

// Get the filename from the command line arguments
const filename = process.argv[2];

// Reading the file specified
fs.readFile(filename, 'utf-8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});
