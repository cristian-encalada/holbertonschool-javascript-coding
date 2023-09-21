#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

// Send a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const tasks = JSON.parse(body);

  // Object to store the count of completed tasks by user ID
  const completedTasks = {};

  // Iterate through the tasks
  tasks.forEach((task) => {
    // Check if the task is completed
    if (task.completed) {
      // Increment the count of completed tasks for the user
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });

  // Print the count of completed tasks
  console.log(completedTasks);
});
