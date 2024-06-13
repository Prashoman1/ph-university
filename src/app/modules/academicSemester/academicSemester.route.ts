import e from "express";
import validationMiddleware from "../../middleware/validationMiddleware";
import { AcademicSemesterValidation } from "./academicSemester.validation";


const route = e.Router();

route.post('/create-academic-semester', validationMiddleware(AcademicSemesterValidation.createAcademicSemesterVSchema));

// route.get('/get-academic-department/:academicDepartmentId?',AcademicDepartmentController.getAllAcademicDepartment);

// route.get('/get-academic-department/:academicDepartmentId?',AcademicDepartmentController.getAcademicDepartmentId);

// route.patch('/update-academic-faculty/:facultyId', validationMiddleware(updateAcademicFacultyVSchema), AcademicFacultyController.updateAcademicFaculty);

export const AcademicSemesterRoute = route;