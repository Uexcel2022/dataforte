import {createInstructor,deleteInstructor,changeInstructor,
    getAllInstructors,getInstructor,assginCourseToInstructor,removeInstCourse} 
    from '../controller/instructorController.js'
import {protect,restrictTo} from '../controller/authController.js'
import {createdAt, updatedAt} from '../middleware/audit.js'
import express from 'express'

const instructorRouter = express.Router();

instructorRouter.use(protect,restrictTo('admin','super-admin'))

instructorRouter.route('/')
.post(createdAt, createInstructor)
.get(getAllInstructors);


instructorRouter.route('/:id')
.get(getInstructor)
.patch(updatedAt,assginCourseToInstructor)
.delete(deleteInstructor)
.put(updatedAt,removeInstCourse);

instructorRouter.patch('/:id/change-ins',changeInstructor);

export {instructorRouter}