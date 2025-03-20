import instructorController from '../controller/instructorController.js'
import express from 'express'
const router = express.Router();

router.route('/')
.post(instructorController.createInstructor)
.get(instructorController.getAllInstructors);


router.route('/:id')
.get(instructorController.getInstructor)
.patch(instructorController.updateInstructor)
.delete(instructorController.deleteInstructor);

export default router