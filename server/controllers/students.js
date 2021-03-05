const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/', (req, res) => {
    const studentsData = Student.all;
    res.send(studentsData);
});

router.get('/:id', (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        const selectedStudent = Student.findById(studentId);
        res.send(selectedStudent);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newStudent = Student.create(data);
    res.status(201).send(newStudent);
});

router.delete('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentToDestroy = Student.findById(studentId);
    studentToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;