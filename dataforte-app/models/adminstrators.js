import mongoose from "mongoose";
import {BaseModel} from './baseSchema.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const adminSchema = new mongoose.Schema({
    position: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Provide postion'],
        enum: {
            values: ['manager','administrator'],
            message: 'Position must be manager or administrator'
        }
    },
    salary: {
        type: Number,
        required: [true, "Pleas provide the employee salary!"],
        min: [70000, 'Salary must not be less than 70000']
    },

    password: {
        type: String,
        required: [true,'Please provide a password.'],
        minlength: [8,'Password must be at least 8 characters.'],
        maxlength: [16,'Password must not exceed 16 characters.'],
        validate: [validator.isStrongPassword, 'Please a password having digits, special characters upper and lower case.'],
        select: false
    },

    confirmPassword: {
        type: String,
        required: [true,'Please confirm your password.'],
        validate: {
            validator: function (v) {
                return v === this.password;
            },
            message: 'Passwords are not the same.'
        }
    },

    role:{
        type: String,
        enum:{
            values : ['admin','mgr']
        },
        default: 'admin'
    },
})

adminSchema.pre('save',async function(next){
    if(!this.isModified('password')){ return next()}
    this.password = await bcrypt.hash(this.password,12)
    this.confirmPassword = undefined
    next()
})

adminSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}


const Admin = BaseModel.discriminator("Admin", adminSchema);
export {Admin};