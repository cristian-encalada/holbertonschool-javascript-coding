console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8'); // Ensure that the input is a string

let nameReceived = false; // Ensure to process the input only once

// if nameReceived = false, process the input

process.stdin.on('data', (data) => {
  const name = data.trim(); // Remove extra newline
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
  nameReceived = true;
});
