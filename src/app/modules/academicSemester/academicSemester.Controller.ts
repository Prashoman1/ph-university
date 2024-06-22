import catchAsnc from "../../utilis/catchAsync";
import sendResponse from "../../utilis/sendResponse";
import { AcademicSemesterService } from "./academicSemester.Service";


const createAcademicSemester = catchAsnc(
    async(req,res,next)=>{
        const AcademicSemester = await AcademicSemesterService.createAcademicSemesterIntoDB(req.body);
        sendResponse(res,{
            statusCode:201,
            success:true,
            data:AcademicSemester
        });
    }
);

const getAcademicSemester = catchAsnc(
    async(req,res,next)=>{
        const AcademicSemester = await AcademicSemesterService.getAcademicSemesterIntoDB(req.params.academicSemesterId);
        sendResponse(res,{
            statusCode:200,
            success:true,
            data:AcademicSemester
        });
    }
);

const deleteAcademicSemester = catchAsnc(
    async(req,res,next)=>{
        const AcademicSemester = await AcademicSemesterService.deleteAcademicSemesterIntoDB(req.params.academicSemesterId);
        sendResponse(res,{
            statusCode:200,
            success:true,
            message:'Academic Semester deleted successfully',
            data:AcademicSemester
        });
    }
);




export const AcademicSemesterController ={
    createAcademicSemester,
    getAcademicSemester,
    deleteAcademicSemester
}