import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudentsByMajor(req, res) {
    // Method to check if the major parameter is valid (CS or SWE)
    // Return the list of students in the specified major

    // Use req.params to access the major from the URL path
    const { major } = req.params;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      // const databaseFile = 'database.csv';
      const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
      const students = await readDatabase(databaseFile);

      if (!students || students.length === 0) {
        return res.status(500).send('Cannot load the database');
      }

      // Filter students based on the major in a case-insensitive manner
      const ms = students.filter((student) => student.field.toLowerCase() === major.toLowerCase());

      return res.status(200).send(`List: ${ms.map((student) => student.firstname).join(', ')}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudents(req, res) {
    // Method that reads the database
    // Count the number of students in each major, and sort them by major name
    try { // const databaseFile = 'database.csv';
      const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
      const students = await readDatabase(databaseFile);

      if (!students || students.length === 0) {
        return res.status(500).send('Cannot load the database');
      }

      const majorCounts = new Map();

      students.forEach((student) => {
        const major = student.field.toLowerCase();
        if (majorCounts.has(major)) {
          majorCounts.set(major, majorCounts.get(major) + 1);
        } else {
          majorCounts.set(major, 1);
        }
      });

      let responseContent = 'This is the list of our students\n';

      // Sort majors by name (case-insensitive)
      const sortedMajors = [...majorCounts.entries()].sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedMajors.forEach(([major, count], index) => {
        const majorStudents = students.filter((student) => student.field.toLowerCase() === major);
        const firstNames = majorStudents.map((student) => student.firstname).join(', ');
        responseContent += `Number of students in ${major.toUpperCase()}: ${count}. List: ${firstNames}`;

        if (index < sortedMajors.length - 1) {
          responseContent += '\n'; // Add newline except for the last entry
        }
      });

      return res.status(200).send(responseContent);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
