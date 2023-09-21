#!/usr/bin/node
// Script that prints the number of movies where the character “Wedge Antilles” is present
// The first argument is the API URL of the Star wars API: https://swapi-api.hbtn.io/api/films/
// Wedge Antilles is character ID 18 - Use this ID for filtering the result of the API
const request = require('request');
const apiUrl = process.argv[2];

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  // Convert the JSON object (key-value pairs) into a Javascript object
  const data = JSON.parse(body);

  let numberOfMovies = 0;

  // Iterate through each movie
  data.results.forEach((movie) => {
    // Iterate through each character in the movie
    movie.characters.forEach((character) => {
      // Check if the character URL includes the ID 18
      if (character.includes('/people/18/')) {
        // If found, increment the movie counter
        numberOfMovies++;
      }
    });
  });
  // Print the number of movies
  console.log(numberOfMovies);
});
