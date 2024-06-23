import e from "express";
import validationMiddleware from "../../middleware/validationMiddleware";
import { AcademicSemesterValidation } from "./academicSemester.validation";
import { AcademicSemesterController } from "./academicSemester.Controller";


const route = e.Router();

route.post('/create-academic-semester', validationMiddleware(AcademicSemesterValidation.createAcademicSemesterVSchema), AcademicSemesterController.createAcademicSemester);

route.get('/get-academic-semester/:academicSemesterId?', AcademicSemesterController.getAcademicSemester);

route.delete('/delete-academic-semester/:academicSemesterId', AcademicSemesterController.deleteAcademicSemester);

// route.get('/get-academic-department/:academicDepartmentId?',AcademicDepartmentController.getAcademicDepartmentId);

// route.patch('/update-academic-faculty/:facultyId', validationMiddleware(updateAcademicFacultyVSchema), AcademicFacultyController.updateAcademicFaculty);

export const AcademicSemesterRoute = route;