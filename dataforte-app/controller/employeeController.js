import catchAsync from "../utils/catch.js"
import Employee from '../models/employeeModel.js'

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
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "instructors"
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
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "updated"
        }
    })
})

const deleteEmployee = catchAsync( async (req,resp,next) => {
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "deleted"
        }
    })
})


export default {createEmployee,getAllEmployees,getEmployee,updateEmployee,deleteEmployee}