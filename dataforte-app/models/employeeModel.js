import mongoose from 'mongoose'
import {BaseModel} from './baseSchema.js'


const  employeeSchema = new mongoose.Schema({

    position: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Provide postion'],
        enum: {
            values: ['manager','instructor','supervisor','security','chief security','lead instructor'],
            message: 'Position must be manager, instructor, supervisor,security, chief security, or lead instructor'
        }
    },

    salary: {
        type: Number,
        required: [true, "Pleas provide the employee salary!"],
        min: [70000, 'Salary must not be less than 70000']
    },

    role:{
        type: String,
        enum:{
            values : ['employee','admin','mgr']
        },
        default: 'employee'
    },
    
})

// employeeSchema.pre('save', async function(next){
//     if(!this.isModified('password')||this.isNew) return next();

//     this.passwordChangedAt = Date.now() - 1000;
//     next();
// })

// employeeSchema.pre('save', async function(next){
//     if(!this.isModified('password')) return next();
//     this.confirmPassword = undefined;
//     next();
// })


const Employee = BaseModel.discriminator('Employee', employeeSchema);

export {Employee}