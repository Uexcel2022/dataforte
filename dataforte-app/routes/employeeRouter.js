import employeeController from '../controller/employeeController.js'
import express from 'express'
const router = express.Router();

router.route('/')
.post(employeeController.createEmployee)
.get(employeeController.getAllEmployees);


router.route('/:id')
.get(employeeController.getEmployee)
.patch(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee);

export default router