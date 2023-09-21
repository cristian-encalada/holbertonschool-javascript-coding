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
    return;
  }

  const data = JSON.parse(body);

  // Count the movies where character ID 18 is present
  const numberOfMovies = data.results.filter((movies) =>
    movies.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
  );

  // Print the number of movies
  console.log(numberOfMovies.length);
});
