import catchAync from '../utils/catch.js'
import {Course} from '../models/courseModel.js'

const createCourse = catchAync(async(req,resp,next)=>{
   const course = await Course.create(req.body)
   resp.status(201).json({
      status: 'success',
      data: {
         course: 'course'
      }
   })
});

const getAllCourses = catchAync(async(req,resp,next)=>{
   const courses = await Course.find()
   resp.status(201).json({
      status: 'success',
      results: courses.length,
      data: {
         course: courses
      }
   })
 });

 const getCourse = catchAync(async(req,resp,next)=>{
    resp.status(201).json({
     message: "A course" 
    })
 });

 const updateCourse = catchAync(async(req,resp,next)=>{
    resp.status(201).json({
     message: "course updated successfully" 
    })
 });

 const deleteCourse = catchAync(async(req,resp,next)=>{
    resp.status(201).json({
     message: "course deleted successfully" 
    })
 });

export default {createCourse,getAllCourses,getCourse,updateCourse,deleteCourse}