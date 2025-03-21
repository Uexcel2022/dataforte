import catchAsync from "../utils/catch.js"
import {Employee} from '../models/employeeModel.js'
import AppError from "../utils/AppError.js"

const createEmployee = catchAsync( async (req,resp,next) => {
    const employee = await Employee.create(req.body)
    resp.status(201).json({
        status: 'success',
        data: {
            employee
        }
    })
})

const getAllEmployees = catchAsync( async (req,resp,next) => {
    const employees = await Employee.find();
    resp.status(200).json({
        status: 'success',
        results: employees.length,
        data: {
            employees
        }
    })
})

const getEmployee = catchAsync( async (req,resp,next) => {
    const employee = await Employee.findById(req.params.id);
    resp.status(200).json({
        status: 'success',
        data: {
            employee
        }
    })
})

const updateEmployee = catchAsync( async (req,resp,next) => {

        const {name, phoneNumber, country, 
           state, address,salary,gender,
           updatedAt,updatedBy,email,position
         } = req.body;
     
        const updatedValues = {
           name,phoneNumber,country, 
           state, address, salary,gender,
           updatedAt,updatedBy,email,position
        }
     
         const emp = 
         await Employee.findByIdAndUpdate(req.params.id,updatedValues,{new: true, runValidators: true});
         
         if(!emp){
            return next(new AppError('No employee found with that ID',404))
         }
     
         resp.status(200).json({
          status: 'success',
          data: {
             employee: emp
          }
         })
      });

const deleteEmployee = catchAsync( async (req,resp,next) => {
    const emp = await Employee.findByIdAndDelete(req.params.id)
    if(!emp){
        return next(new AppError('No employee found with that ID',404))
     }
    resp.status(204).json({
        status: 'success',
        employee: null
    })
})


export {createEmployee,getAllEmployees,getEmployee,updateEmployee,deleteEmployee}