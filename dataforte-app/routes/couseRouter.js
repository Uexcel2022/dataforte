import courseController from "../controller/courseController.js";
import express from 'express'
const router = express.Router();

router.route('/')
.post(courseController.createCourse)
.get(courseController.getAllCourses);


router.route('/:id')
.get(courseController.getCourse)
.patch(courseController.updateCourse)
.delete(courseController.deleteCourse);


export default router;