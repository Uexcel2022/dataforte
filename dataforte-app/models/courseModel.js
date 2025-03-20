
import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true,'Please provide course name.'],
        minlength: [3,'Name must be at least 3 characters.'],
        maxlength: [30,'Name must not exceed 30 characters.'],
        unique : [true, 'Course exists'],
        trim: true,
    },

    category: {
        type: String,
        trim: true,
        required: [true,'Please provide course category.'],
        enum: {
           values : ['software development', 'product managment', 'cyber securiy','data analysis'],
           message: 'course categeries: software, product managment, cyber securiy and data analysis'
        }
    },

    salary: {
        type: Number,
        trim: true,
        required: [true, "Pleas provide course price."],
        min: [35000, 'Price must not be less than 35000']
    },

    createdAt: {
        type: Date,
    },
    
})

const Course = mongoose.model('Course', courseSchema);

export {Course}