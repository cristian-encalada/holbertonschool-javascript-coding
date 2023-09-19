#!/usr/bin/node
// Script that writes a string to a file
const fs = require('fs');

// Get the file path and content to write from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the string to the specified file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
