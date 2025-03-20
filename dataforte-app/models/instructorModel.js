import mongoose from './DBConnection.js';


const instructorSchema = mongoose.Schema({

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        require: [true, 'Please provide instruction ID']
    },
    
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            require: [true, 'Please provide course(s)']
        }
    ],

    createdAt: {
        type: Date,
    },

    createdAt: {
        type: Date,
    },
})


export default mongoose.model('Instructor', instructorSchema);