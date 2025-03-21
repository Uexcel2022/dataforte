import courseController from "../controller/courseController.js";
import express from 'express'
const courseRouter = express.Router();

courseRouter.route('/')
.post(courseController.createCourse)
.get(courseController.getAllCourses);


courseRouter.route('/:id')
.get(courseController.getCourse)
.patch(courseController.updateCourse)
.delete(courseController.deleteCourse);


export {courseRouter};