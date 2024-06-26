import { Request, Response } from "express";
import { AcademicDepartmentService } from "./academicDepartment.service";
import catchAsnc from "../../utilis/catchAsync";


const createAcademicDepartment = catchAsnc(async(req: Request, res: Response) => {
        const academicDepartment = await AcademicDepartmentService.postAcadmicDepartment_IntoDB(req.body);
        if(academicDepartment){
            res.status(200).json({
                success:true,
                message:'Academic Department created successfully',
                data:academicDepartment
            });
        }
}) 

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

const updateAcademicDepartment = async(req: Request, res: Response) => {
    try {
        const departmentId = req.params.departmentId;
        const department = await AcademicDepartmentService.updateAcademicDepartment_IntoDB(departmentId, req.body);
        if(!department){
            return res.status(404).json({
                success:false,
                message:'Error in updating Academic Department'
            });
        }
        return res.status(200).json({
            success:true,
            message:'Academic Department updated successfully',
            data:department
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'Error in updating Academic Department'
        });
    }

}



export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    updateAcademicDepartment
}