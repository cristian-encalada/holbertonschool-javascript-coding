const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databaseFile = process.argv[2] || 'database.csv';

    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };

    await countStudents(databaseFile);

    consoleOutput = consoleOutput.trim();

    console.log = originalConsoleLog;

    res.send(`This is the list of our students\n${consoleOutput}`);
  } catch (error) {
    res.status(400).send(`This is the list of our students\n${error.message}`);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
