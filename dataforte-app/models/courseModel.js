// import mongoose from './DBConnection.js';

// const courseSchema = mongoose.Schema({
//     courseName: {
//         type: String,
//         required: [true,'Please provide course name.'],
//         minlength: [3,'Name must be at least 3 characters.'],
//         maxlength: [30,'Name must not exceed 30 characters.'],
//         unique : [true, 'Course exists!'],
//         trim: true,
//         validate: {
//             validator: function (v) {
//                 return /^[A-Za-z]+ ?[A-Za-z]* ?[A-Za-z]*$/.test(v);
//             },
//             message: 'Name must consist of only alphabets.'
//         }
//     },
//     description: {
//         type: String,
//         required: [true, 'Please course description.'],
//         lowercase: true,
//         trim: true,

//     },

//     category: {
//         type: String,
//         required: [true,'Please provide course category.'],
//         enum: {
//            values : ['software development', 'product managment', 'cyber securiy','data analysis'],
//            message: 'course categeries: software, product managment, cyber securiy and data analysis'
//         }
//     },
    
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     },
    
// })

// export default mongoose.model('Course', courseSchema);