import studentController from "../controller/studentController.js";

import express from 'express';

const studentRouter = express.Router();

studentRouter.route('/')
.post(studentController.createStudent)
.get(studentController.getAllStudents)

studentRouter.route('/:id')
.get(studentController.getStudent)
.patch(studentController.updatetudent)
.delete(studentController.delateStudent);

export {studentRouter}