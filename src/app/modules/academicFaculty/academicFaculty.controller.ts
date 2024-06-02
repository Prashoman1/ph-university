import { NextFunction, Request, Response } from "express";
import { AcademicService } from "./academicFaculty.service";


const createAcademicFaculty = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const academicInfo = req.body;
        const academicFaculty = await AcademicService.createAcademicFacultyIntoDB(academicInfo);
        res.status(200).json({
            success:true,
            massege : "Academic Faculty created successfully",
            data:academicFaculty
        });
    } catch (error) {
        next(error);
    }
}
const getAcademicFaculty = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const academicFaculties = await AcademicService.getAcademicFacultiesIntoDB();
        res.status(200).json({
            success:true,
            massege : "Academic Faculties fetched successfully",
            data:academicFaculties
        });
    } catch (error) {
        next(error);
    }
}

const updateAcademicFaculty = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const facultyId = req.params.facultyId;
        const academicInfo = req.body;
        const academicFaculty = await AcademicService.updateAcademicFacultyIntoDB(facultyId,academicInfo);
        res.status(200).json({
            success:true,
            massege : "Academic Faculty updated successfully",
            data:academicFaculty
        });
    } catch (error) {
        next(error);
    }
}

const getAcademicFacultyById = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const facultyId = req.params.facultyId;
        const academicFaculty = await AcademicService.getAcademicFacultyByIdIntoDB(facultyId);
        res.status(200).json({
            success:true,
            massege : "Academic Faculty fetched successfully",
            data:academicFaculty
        });
    } catch (error) {
        next(error);
    }
}


export const AcademicFacultyController ={
    createAcademicFaculty,
    getAcademicFaculty,
    updateAcademicFaculty,
    getAcademicFacultyById
}