import catchAsync from "../utils/catch.js"
import Instructor from '../models/instructorModel.js'

const createInstructor = catchAsync( async (req,resp,next) => {
    const instructor = await Instructor.create(req.body)
    resp.status(201).json({
        status: 'success',
        data: {
            instructor
        }
    })
})

const getAllInstructors = catchAsync( async (req,resp,next) => {
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "instructors"
        }
    })
})

const getInstructor = catchAsync( async (req,resp,next) => {
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "instructor"
        }
    })
})

const updateInstructor = catchAsync( async (req,resp,next) => {
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "updated"
        }
    })
})

const deleteInstructor = catchAsync( async (req,resp,next) => {
    resp.status(200).json({
        status: 'success',
        data: {
            instructor: "deleted"
        }
    })
})


export default {createInstructor,getAllInstructors,getInstructor,updateInstructor,deleteInstructor}