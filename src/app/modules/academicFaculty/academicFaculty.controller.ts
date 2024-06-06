import { NextFunction, Request, Response } from "express";
import { AcademicService } from "./academicFaculty.service";
import catchAsnc from "../../utilis/catchAsync";


const createAcademicFaculty = catchAsnc(async (req:Request,res:Response,next:NextFunction)=>{
        const academicInfo = req.body;
        const academicFaculty = await AcademicService.createAcademicFacultyIntoDB(academicInfo);
        res.status(200).json({
            success:true,
            massege : "Academic Faculty created successfully",
            data:academicFaculty
        });
})
const getAcademicFaculty = catchAsnc(async (req,res)=>{
        const academicFaculties = await AcademicService.getAcademicFacultiesIntoDB();
        res.status(200).json({
            success:true,
            massege : "Academic Faculties fetched successfully",
            data:academicFaculties
        });
    
})

const updateAcademicFaculty = catchAsnc(async (req:Request,res:Response,next:NextFunction)=>{
       
            const facultyId = req.params.facultyId;
            const academicInfo = req.body;
            const academicFaculty = await AcademicService.updateAcademicFacultyIntoDB(facultyId,academicInfo);
            res.status(200).json({
                success:true,
                massege : "Academic Faculty updated successfully",
                data:academicFaculty
            });
    }
)

const getAcademicFacultyById = catchAsnc(async (req,res)=>{
        const facultyId = req.params.facultyId;
        const academicFaculty = await AcademicService.getAcademicFacultyByIdIntoDB(facultyId);
        res.status(200).json({
            success:true,
            massege : "Academic Faculty fetched successfully",
            data:academicFaculty
        });
})


export const AcademicFacultyController ={
    createAcademicFaculty,
    getAcademicFaculty,
    updateAcademicFaculty,
    getAcademicFacultyById
}