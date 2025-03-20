import studentController from "../controller/studentController.js";

import express from 'express';

const router = express.Router();

router.route('/')
.post(studentController.createStudent)
.get(studentController.getAllStudents)

router.route('/:id')
.get(studentController.getStudent)
.patch(studentController.updatetudent)
.delete(studentController.delateStudent);


// .get(studentController.getAllStudents)

export default router