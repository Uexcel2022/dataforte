import mongoose from './DBConnection.js';
import validator from 'validator';

const  employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please provide your name.'],
        minlength: [3,'Name must be at least 3 characters.'],
        maxlength: [30,'Name must not exceed 30 characters.'],
        trim: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+ [A-Za-z]+ ?[A-Za-z]*$/.test(v);
            },
            message: 'Name must consist of only alphabets.'
        }
    },
    email: {
        type: String,
        unique: [true, 'The email has been used.'],
        required: [true, 'Please provide your email.'],
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },

    phoneNumber: {
        type: String,
        required: [true,'Please provide your phone number.'],
        validate: {
            validator: function (v) {
                return /^0[7-9][10][0-9]{8}$/.test(v);
            },
            message: 'Please provide a valid phone number.'
        }
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
    gender:{
        type: String,
        required: [true,'Please provide your gender.'],
        lowercase: true,
        enum: {
            values: ['male','female'],
            message: 'Gender must be male or female.'
        }
    },

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

    role:{
        type: String,
        enum:{
            values : ['employee','admin']
        },
        default: 'employee'
    },
    
    address: {
        type: String,
        required: [true,'Please provide your address.'],
        trim: true,
        maxlength: [100,'Address must not exceed 100 characters.'],
        minlength: [10,'Address must be at least 10 characters.']
    },

    state: {
        type: String,
        required: [true,'Please provide your state.'],
        trim: true,
        maxlength: [30,'State must not exceed 30 characters.'],
        minlength: [3,'State must be at least 3 characters.']
    },

    country: {
        type: String,
        required: [true,'Please provide your country.'],
        trim: true,
        maxlength: [30,'Country must not exceed 30 characters.'],
        minlength: [3,'Country must be at least 3 characters.']
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },

    passwordChangedAt: Date,
    passwordResetToken: String,

    
})

employeeSchema.pre('save', async function(next){
    if(!this.isModified('password')||this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
})

employeeSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.confirmPassword = undefined;
    next();
})


export default mongoose.model('Employee', employeeSchema);