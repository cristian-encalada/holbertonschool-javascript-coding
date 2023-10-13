const fs = require('fs');

async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the promise with the error if the file is not accessible
      } else {
        const lines = data.trim().split('\n'); // Split data into lines
        const headers = lines[0].split(','); // Extract headers from the first line
        const students = [];

        for (let i = 1; i < lines.length; i += 1) {
          const values = lines[i].split(',');
          const student = {};

          for (let j = 0; j < headers.length; j += 1) {
            student[headers[j]] = values[j];
          }

          students.push(student);
        }

        resolve(students); // Resolve the promise with an array of student objects
      }
    });
  });
}

module.exports = { readDatabase };
