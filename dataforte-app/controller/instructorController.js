import catchAsync from "../utils/catch.js"
import {Instructor} from '../models/instructorModel.js'
import AppError from "../utils/AppError.js"
import {createOne, deleteOne, findMany, findOne} from './handleFactory.js'


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

const createInstructor = createOne(Instructor);
const getAllInstructors = findMany(Instructor)
const getInstructor = findOne(Instructor)
const deleteInstructor = deleteOne(Instructor)


export {createInstructor,getAllInstructors,
    getInstructor,assginCourseToInstructor,
    deleteInstructor,removeInstCourse
}