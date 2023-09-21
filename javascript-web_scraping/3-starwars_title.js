#!/usr/bin/node
// Script that prints the title of a Star Wars movie where the episode number matches a given integer
// The first argument is the movie ID
const request = require('request');
const movieID = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieID}`;

// Send a GET request to the Star Wars API
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
