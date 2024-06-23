import express  from "express";
import { UserController } from "./user.controller";
import validationMiddleware from "../../middleware/validationMiddleware";
import { UserValidation } from "./user.Validation";
import { StudentValidation } from "../students/student.validation";

const route = express.Router();

route.post('/create-student', validationMiddleware(UserValidation.UserValidationCreate), validationMiddleware(StudentValidation.studentValidationCreate), UserController.createUsersStudent);


export const userRouter = route;