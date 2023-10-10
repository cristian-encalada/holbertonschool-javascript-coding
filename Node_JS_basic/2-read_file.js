const fs = require('fs');
// .csv file data sample and headers:
// firstname,lastname,age,field
// Johann,Kerbrou,30,CS

function countStudents(path) {
  try {
    // Read the CSV file, sync mode
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n');

    // Variables to count students by field
    const studentCounts = {};
    const fieldLists = {};

    // Iterate through each line, skip the firt line (headers)
    for (let i = 1; i < lines.length; i++) {
      // Extract the current line from the lines array
      const line = lines[i];
      // Split the line into an array of parts using a comma as delimeter
      const parts = line.split(',');
      // If th line has 4 parts, it contains all the required fields
      if (parts.length === 4) {
        // Extract the 'field' value from the line
        const field = parts[3];
        // Extract the 'firstname' value from the line
        const firstName = parts[0];

        // Check if the studentCounts does not already have an entry for the current field. 
        // If not, it initializes the and creates an empty list count for that field to 0 
        if (!studentCounts[field]) {
          studentCounts[field] = 0;
          fieldLists[field] = [];
        }

        // Increment count and add to the list for this field
        studentCounts[field]++;
        fieldLists[field].push(firstName);
      }
    }

    // Calculate and log the total number of students
    const totalStudents = Object.values(studentCounts).reduce(
      (total, count) => total + count,
      0 // initialize the 'total' variable
    );
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their first names
    for (const field in studentCounts) {
      const count = studentCounts[field];
      const list = fieldLists[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    // Handle errors if the file cannot be loaded
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
