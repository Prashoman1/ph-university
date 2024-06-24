import e from "express";
import validationMiddleware from "../../middleware/validationMiddleware";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";

const route = e.Router();

// route.post('/create-academic-department', 
// validationMiddleware(AcademicDepartmentValidation.createAcademicDepartmentVSchema), AcademicDepartmentController.createAcademicDepartment);
route.post('/create-academic-department', 
 AcademicDepartmentController.createAcademicDepartment);

route.get('/get-academic-department/:academicDepartmentId?',AcademicDepartmentController.getAllAcademicDepartment);

// route.get('/get-academic-department/:academicDepartmentId?',AcademicDepartmentController.getAcademicDepartmentId);

route.patch('/update-academic-department/:departmentId', validationMiddleware(AcademicDepartmentValidation.updateAcademicDepartmentVSchema), AcademicDepartmentController.updateAcademicDepartment);

export const AcademicDepartmentRoute = route;