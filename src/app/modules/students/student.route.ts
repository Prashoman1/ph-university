import express from "express";
import { StudentController } from "./student.conrtoller";

const route = express.Router();

route.get("/get-student/:studentId?", StudentController.getStudent);
route.delete("/delete-student/:studentId", StudentController.studentDelete);
route.patch("/update-student/:studentId", StudentController.studentInfoUpdate);

route.post("/create-student");

export const studentRouter = route;
