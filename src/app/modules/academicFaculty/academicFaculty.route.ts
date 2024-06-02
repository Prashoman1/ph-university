import e from "express";
import validationMiddleware from "../../middleware/validationMiddleware";
import { academicFacultyVSchema, updateAcademicFacultyVSchema } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";
const route = e.Router();

route.post('/create-academic-faculty', validationMiddleware(academicFacultyVSchema) , AcademicFacultyController.createAcademicFaculty);

route.get('/get-academic-faculties',AcademicFacultyController.getAcademicFaculty);
route.get('/get-academic-faculty/:facultyId',AcademicFacultyController.getAcademicFacultyById);

route.patch('/update-academic-faculty/:facultyId', validationMiddleware(updateAcademicFacultyVSchema), AcademicFacultyController.updateAcademicFaculty);

export const AcademicFacultyRoute = route;