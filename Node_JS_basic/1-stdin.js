const readline = require('readline');

// https://nodejs.org/api/readline.html#readlinepromisescreateinterfaceoptions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
// rl.question() method displays the query by writing it to the output and waits for user input
rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
