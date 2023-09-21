#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieID}`;

// Send an HTTP GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Convert the JSON object (key-value pairs) into a Javascript object
  const movie = JSON.parse(body);

  // Print the title of the movie
  console.log(movie.title);
});
