import { Router } from "express";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";


const router = Router();

const modularRoute = [
    {
        path:"/academic-faculties",
        route: AcademicFacultyRoute
    }
]

modularRoute.forEach((route)=>{
    router.use(route.path, route.route)
})
export default router;
