import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});
import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE,{
  'authSource': 'admin',
  'user': process.env.DATABASE_USERNAME,
  'pass': process.env.DATABASE_PASSWORD,
}).then(()=> console.log("DB connection successful")).catch(err=>{console.log(err.name,err.message)})

export default mongoose
