import { Router } from "express";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";


const router = Router();

const modularRoute = [
    {
        path:"/academic-faculties",
        route: AcademicFacultyRoute
    },
    {
        path:"/academic-departments",
        route: AcademicDepartmentRoute
    }
]

modularRoute.forEach((route)=>{
    router.use(route.path, route.route)
})
export default router;
