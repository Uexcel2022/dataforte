import adminController from '../controller/adminController.js'
import express from 'express'
import {createdAt,updatedAt} from '../middleware/audit.js'
const adminRouter = express.Router();

adminRouter.route('/')
.post(createdAt,adminController.createAdmin)
.get(adminController.getAllAdins);


adminRouter.route('/:id')
.get(adminController.getAdmin)
.patch(updatedAt,adminController.updateAdmin)
.delete(adminController.deleteAdmin);

adminRouter.put('/password',updatedAt,adminController.updateAdminPassword)
adminRouter.put('/password/:id',updatedAt,adminController.updateAdminPassword)


export {adminRouter}