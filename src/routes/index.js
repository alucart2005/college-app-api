const express = require('express');
const router = express.Router();
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');

// colocar las rutas aquí
router.use('/students', studentRouter)
router.use('/courses', courseRouter)

module.exports = router;