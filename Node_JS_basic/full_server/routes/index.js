const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Route for the homepage linked to AppController
router.get('/', AppController.getHomepage);

// Get all students linked to StudentsController
router.get('/students', StudentsController.getAllStudents);

// Get students by major linked to StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
