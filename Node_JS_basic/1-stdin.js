const readline = require('readline');

// https://nodejs.org/api/readline.html#readlinepromisescreateinterfaceoptions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
// rl.on('line', ...) handle each line of input separately to work with both \n and \r line ends
rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
