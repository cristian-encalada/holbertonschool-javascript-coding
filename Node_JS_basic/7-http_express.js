const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databaseFile = req.query.file || 'database.csv';

    let consoleOutput = '';

    // Override the console.log function to capture output
    const originalConsoleLog = console.log;
    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };

    await countStudents(databaseFile);

    consoleOutput = consoleOutput.trim();

    console.log = originalConsoleLog;

    res.status(200).send(`This is the list of our students\n${consoleOutput}`);
  } catch (error) {
    res.status(400).send(`This is the list of our students\n${error.message}`);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found\n');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
