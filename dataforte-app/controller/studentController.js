import catchAsync from "../utils/catch.js"
import AppError from '../utils/AppError.js'
import {studentValidation,options} from '../validation/studentValidation.js'
import validatePwd from '../utils/validatePassword.js'
import Student from '../models/studentModel.js'

const createStudent = catchAsync(async (req,resp,next)=>{
    //  await studentValidation.validateAsync(req.body,options)

    // const res = await validatePwd(req.body.password)

    // if(res!=='true'){
    //     return next(new AppError(res,400))
    // }

    const student = await Student.create(req.body);
    student.password= undefined;

    resp.status(200).json({
        status: 'success',
        data : {
            message: student
        }
    })
})

const getAllStudents = catchAsync(async (req,resp,next)=>{
    resp.status(200).json({
        message: "Students"
    })
})

const getStudent = catchAsync(async(req,resp,next)=>{
    const student = await Student.findById(req.params.id)
    resp.status(200).json({
        student
    })
})

const updatetudent = catchAsync(async(req,resp,next)=>{
    resp.status(200).json({
        message: "Student updated successfully"
    })
})

const delateStudent = catchAsync(async(req,resp,next)=>{
    resp.status(200).json({
        message: "Student deleted successfully"
    })
})


export default {createStudent,getAllStudents,getStudent,updatetudent,delateStudent}