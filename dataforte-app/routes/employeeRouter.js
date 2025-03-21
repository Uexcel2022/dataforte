import employeeController from '../controller/employeeController.js'
import express from 'express'
import {adminRouter} from './adminRouter.js'
const employeeRouter = express.Router();

employeeRouter.use('/admin', adminRouter);

employeeRouter.route('/')
.post(employeeController.createEmployee)
.get(employeeController.getAllEmployees);


employeeRouter.route('/:id')
.get(employeeController.getEmployee)
.patch(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee);

export {employeeRouter}