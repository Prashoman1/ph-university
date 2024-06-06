import { Request, Response } from "express";
import { AcademicDepartmentService } from "./academicDepartment.service";


const createAcademicDepartment = async(req: Request, res: Response) => {
    try {
        const academicDepartment = await AcademicDepartmentService.postAcadmicDepartment_IntoDB(req.body);
        if(academicDepartment){
            res.status(200).json({
                success:true,
                message:'Academic Department created successfully',
                data:academicDepartment
            });
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllAcademicDepartment = async(req: Request, res: Response) => {
    try {
        const academicDepartmentId = req.params.academicDepartmentId;
        if(academicDepartmentId){
            const department = await AcademicDepartmentService.getAcademicDepartmentById_IntoDB(academicDepartmentId);
            if(!department){
                return res.status(404).json({
                    success:false,
                    message:'Error in fetching Academic Department'
                });
            }
            return res.status(200).json({
                success:true,
                message:'Academic Department fetched successfully',
                data:department
            });
        }
        const departments = await AcademicDepartmentService.getAllAcademicDepartment_IntoDB();
    if(!departments){
        return res.status(400).json({
            success:false,
            message:'Error in fetching Academic Department'
        });
      
    }
    return  res.status(200).json({
        success:true,
        message:'Academic Department fetched successfully',
        data:departments
    });
    } catch (error) {                               
        return res.status(400).json({
            success:false,
            message:'Error in fetching Academic Department'
        });
    }
    
}



export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
}