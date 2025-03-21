import catchAsync from "../utils/catch.js"
import {Instructor} from '../models/instructorModel.js'
import AppError from "../utils/AppError.js"
import { updatedAt } from "../middleware/audit.js"

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
    const instructors = await Instructor.find();
    resp.status(200).json({
        status: 'success',
        results: instructors.length,
        data: {
            instructors
        }
    })
})

const getInstructor = catchAsync( async (req,resp,next) => {
    const instructor = await Instructor.findById(req.params.id).populate('courses')
    if(!instructor){
        return navigator('No instructor with the ID',404)
    }
    resp.status(200).json({
        status: 'success',
        data: {
            instructor
        }
    })
})

const assginCourseToInstructor = catchAsync( async (req,resp,next) => {
    const updatedAt = req.body.updatedAt;
    const updatedBy = req.body.updatedBy
    req.body.updatedBy = undefined;
    req.body.updatedAt = undefined;
    const instructor = 
    await Instructor.findByIdAndUpdate(req.params.id,{$addToSet: req.body,updatedAt,updatedBy},{new: true})

    if(!instructor){
        return navigator('No instructor with the ID',404)
    }
    resp.status(200).json({
        status: 'success',
        data: {
            instructor
        }
    })
})

const removeInstCourse = catchAsync(async(req,resp,next)=>{
    const instructor = await Instructor.findById(req.params.id);
    if(!instructor){
        return next(new AppError('No instructor found with that ID',404))
    }
    const toRemoveCourses = req.body.courses;
    const courses = await JSON.parse(JSON.stringify(instructor.courses));
     const updatedCourses = await courses.filter(el=>!toRemoveCourses.includes(el))
     instructor.courses=updatedCourses
     instructor.save();
    resp.status(200).json({
        status: 'success',
        data: {
            instructor
        }
    })
})

const deleteInstructor = catchAsync( async (req,resp,next) => {
    
    const instructor = await Instructor.findByIdAndDelete(req.params.id)
    if(!instructor){
        return navigator('No instructor with the ID',404)
    }
    resp.status(204).json({
        status: 'success',
        data: {
            instructor: null
        }
    })
})


export {createInstructor,getAllInstructors,
    getInstructor,assginCourseToInstructor,
    deleteInstructor,removeInstCourse
}