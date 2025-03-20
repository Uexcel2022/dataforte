import express from 'express'
import bodyParser from 'body-parser'
import studentRouter from './routes/studentRouter.js'
import courseRouter from './routes/couseRouter.js'
import instructorRouter from './routes/instructorRouter.js'
import employeeRouter from './routes/employeeRouter.js'
import globalErrorHandler from './controller/errorController.js'
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/students',studentRouter);
app.use('/api/v1/courses',courseRouter);
app.use('/api/v1/instructors',instructorRouter);
app.use('/api/v1/employees',employeeRouter);

app.use(globalErrorHandler)
export default app;