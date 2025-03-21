import employeeController from '../controller/employeeController.js'
import express from 'express'
import {adminRouter} from './adminRouter.js'
const router = express.Router();

router.use('/admin', adminRouter);

router.route('/')
.post(employeeController.createEmployee)
.get(employeeController.getAllEmployees);


router.route('/:id')
.get(employeeController.getEmployee)
.patch(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee);

export default router