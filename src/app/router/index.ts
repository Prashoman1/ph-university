import { Router } from "express";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { userRouter } from "../modules/user/user.route";
import { studentRouter } from "../modules/students/student.route";


const router = Router();

const modularRoute = [
    {
        path:"/academic-faculties",
        route: AcademicFacultyRoute
    },
    {
        path:"/academic-departments",
        route: AcademicDepartmentRoute
    },
    {
        path:"/academic-semesters",
        route: AcademicSemesterRoute
    },
    {
        path:"/users",
        route:userRouter
    },
    {
        path:"/student",
        route:studentRouter
    }
]

modularRoute.forEach((route)=>{
    router.use(route.path, route.route)
})
export default router;  
