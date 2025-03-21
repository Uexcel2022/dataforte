import catchAync from '../utils/catch.js'
import {Admin} from '../models/adminstrators.js'
import AppError from '../utils/AppError.js'

const createAdmin = catchAync(async(req,resp,next)=>{
   const admin = await Admin.create(req.body)
   resp.status(201).json({
      status: 'success',
      data: {
         admin
      }
   })
});

const getAllAdins = catchAync(async(req,resp,next)=>{
   const admins = await Admin.find()
   resp.status(201).json({
      status: 'success',
      results: admins.length,
      data: {
         admins
      }
   })
 });

 const getAdmin = catchAync(async(req,resp,next)=>{
   const admin = await Admin.findById(req.params.id)
   if(!admin){
      return next(new AppError('No admin found with that ID',404))
   }
   resp.status(201).json({
      status: 'success',
      data: {
         admin
      }
   })
 });

 const updateAdmin = catchAync(async(req,resp,next)=>{
   const {name, phoneNumber, country, 
      state, address,salary,gender,
      updatedAt,updatedBy
    } = req.body;

   const updatedValues = {
      name,phoneNumber,country, 
      state, address, salary,gender,
      updatedAt,updatedBy
   }

    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id,updatedValues,{new: true, runValidators: true});
    
    if(!updatedAdmin){
       return next(new AppError('No admin found with that ID',404))
    }

    resp.status(200).json({
     status: 'success',
     data: {
        admin: updatedAdmin
     }
    })
 });



 const updateAdminPassword = catchAync(async(req,resp,next)=>{

   const {oldPassword, newPassword, confirmPassword, updatedAt,updatedBy} = req.body;

   if(!req.params.id && !req.user){
      return next(new AppError('Expected ID value not present!',400));
   }

   const id = req.user? req.user.id : req.params.id

   if(newPassword !== confirmPassword){
      throw next(new AppError('Passwords are not the same!',400));
   }
   const admin = await Admin.findById(id).select('+password')

   if(!admin){
      throw next(new AppError('Admin not found with that ID!',400));
   }

   if(!await admin.correctPassword(oldPassword, admin.password)){
      throw next(new AppError('Invalid password!',400));
   }

   const updatedValues = {
     newPassword,updatedAt,updatedBy, confirmPassword
   }
   admin.password = updatedValues.newPassword
   admin.updatedAt = updatedValues.updatedAt
   admin.updatedBy = updatedValues.updatedBy
   admin.confirmPassword = updatedValues.confirmPassword;
   admin.save();

    resp.status(200).json({
     status: 'success',
     message: 'Password updated successfully.'
   });
})


 const deleteAdmin = catchAync(async(req,resp,next)=>{
    resp.status(201).json({
     message: "course deleted successfully" 
    })
 })


export default {createAdmin,getAllAdins,getAdmin: getAdmin,updateAdmin,deleteAdmin,updateAdminPassword}

