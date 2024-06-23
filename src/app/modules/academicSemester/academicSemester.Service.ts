
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./acadmicSemester.model";


const createAcademicSemesterIntoDB = async(payload:TAcademicSemester)=>{
    const result = AcademicSemester.create(payload);
    return result;
}

const getAcademicSemesterIntoDB = async(payload:string)=>{
    if(payload){
        const findByIdQuery = await AcademicSemester.findById(payload);
        return findByIdQuery;
    }
    const result = await AcademicSemester.find();
    return result;
}

const deleteAcademicSemesterIntoDB = async(payload:string)=>{
    const result = await AcademicSemester.findByIdAndDelete(payload);
    return result;

}


export const AcademicSemesterService ={
    createAcademicSemesterIntoDB,
    getAcademicSemesterIntoDB,
    deleteAcademicSemesterIntoDB
}