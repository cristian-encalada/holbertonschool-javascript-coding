process.stdout.write('Welcome to Holberton School, what is your name?\n');
// 'data' event listener: waits for data input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});
// 'end' event listener: writes the final message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
