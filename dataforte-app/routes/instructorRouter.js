import instructorController from '../controller/instructorController.js'
import express from 'express'
const instructorRouter = express.Router();

instructorRouter.route('/')
.post(instructorController.createInstructor)
.get(instructorController.getAllInstructors);


instructorRouter.route('/:id')
.get(instructorController.getInstructor)
.patch(instructorController.updateInstructor)
.delete(instructorController.deleteInstructor);

export {instructorRouter}