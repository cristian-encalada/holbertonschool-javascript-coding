const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    // Method that reads the database
    // Count the number of students in each major, and sort them by major name
    try {
      const databaseFile = 'database.csv'; // You can change this to the actual path

      const students = await readDatabase(databaseFile);

      if (!students || students.length === 0) {
        res.status(500).send('Cannot load the database');
        return;
      }

      const majorCounts = new Map();

      students.forEach((student) => {
        const major = student.field.toLowerCase(); // Assuming the field is a property in the student object
        if (majorCounts.has(major)) {
          majorCounts.set(major, majorCounts.get(major) + 1);
        } else {
          majorCounts.set(major, 1);
        }
      });

      res.status(200).send('This is the list of our students\n');

      // Sort majors by name (case-insensitive)
      for (const [major, count] of [...majorCounts.entries()].sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))) {
        const majorStudents = students.filter((student) => student.field.toLowerCase() === major);
        const firstNames = majorStudents.map((student) => student.firstname).join(', ');
        res.write(`Number of students in ${major.toUpperCase()}: ${count}. List: ${firstNames}\n`);
      }

      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    // Method to checks if the major parameter is valid (CS or SWE)
    // Return the list of students in the specified major
    const { major } = req.query;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databaseFile = 'database.csv'; // You can change this to the actual path

      const students = await readDatabase(databaseFile);

      if (!students || students.length === 0) {
        res.status(500).send('Cannot load the database');
        return;
      }

      const majorStudents = students.filter((student) => student.field.toLowerCase() === major.toLowerCase());

      res.status(200).send(`List: ${majorStudents.map((student) => student.firstname).join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
