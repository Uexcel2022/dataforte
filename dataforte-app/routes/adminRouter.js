import {createAdmin,getAdmin,getAllAdins,
    deleteAdmin,updateAdmin,updateAdminPassword
} from '../controller/adminController.js'

import express from 'express'
import {createdAt,updatedAt} from '../middleware/audit.js'
const adminRouter = express.Router();

adminRouter.route('/').post(createdAt,createAdmin).get(getAllAdins);


adminRouter.route('/:id').get(getAdmin)
.put(updatedAt,updateAdmin).patch(updatedAt,deleteAdmin);

adminRouter.put('/password',updatedAt,updateAdminPassword)
adminRouter.put('/password/:id',updatedAt,updateAdminPassword);


export {adminRouter}